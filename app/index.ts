import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";




/*TODO:
 Goal: Onboard the app on the cluster that was just created

 - Refer Dockerfile and use that to create the app deployment, service kubernetes resources 
 - Deploy these resources using Pulumi
 - Ensure APP should be deployed only on nodepool labeled primary
 */
