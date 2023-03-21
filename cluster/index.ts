import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import { Config } from "@pulumi/pulumi";
import { gkeClusterName, clusterNodeCount, clusterLocation, clusterNetwork, clusterMasterCIDR, clusterPodIPCIDR, clusterSvcIPCIDR } from "./config";

/* TODO:
  - Create GKE private Cluster with public endpoint access enabled in region you prefer by adding onto the code 
  - Use default project network to setup K8s required network and CIDRS using the template below
  - Create 2 node pools, primary nodepool  - one to host the app with a size of 3 nodes and secondary -  node pool with 1 node
  - output the kubeconfig
  - Add support for authorizing devs to access cluster with shared kubeconfig
*/

const gkeCluster = new gcp.container.Cluster(gkeClusterName, {
    addonsConfig: {
      gcePersistentDiskCsiDriverConfig:{
          enabled: true,
      },
      dnsCacheConfig: {
          enabled: true,
      },
    },
   

    location: clusterLocation,
    removeDefaultNodePool: true,
    network: clusterNetwork,
    networkingMode: "VPC_NATIVE",

    initialNodeCount: clusterNodeCount,
    privateClusterConfig: {
        enablePrivateEndpoint: false,
        enablePrivateNodes: true,
        masterGlobalAccessConfig: {
              enabled: true,
        },
        masterIpv4CidrBlock: clusterMasterCIDR,
    },
    ipAllocationPolicy: {
      clusterIpv4CidrBlock: clusterPodIPCIDR,
      servicesIpv4CidrBlock: clusterSvcIPCIDR,
    },
});


// cluster name
export const clusterName = gkeCluster.name;