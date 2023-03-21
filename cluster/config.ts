import * as gcp from "@pulumi/gcp";
import { Config } from "@pulumi/pulumi";
import * as pulumi from "@pulumi/pulumi";
import { envSuffix } from '../index'

const config = new Config();

const environment = config.get("environment") as string;
const environmentSuffix = envSuffix(environment);
const clusterName = config.get("clusterName") as string;
export const gkeClusterName = clusterName.concat(environmentSuffix);

export const clusterNodeCount = config.getNumber("clusterNodeCount") || 1;

export const clusterLocation = config.get("clusterLocation");

export const clusterNetwork = config.get("clusterNetwork");

export const clusterMasterCIDR = config.get("clusterMasterCIDR");

export const clusterPodIPCIDR = config.get("clusterPodIPCIDR");

export const clusterSvcIPCIDR = config.get("clusterSvcIPCIDR");

