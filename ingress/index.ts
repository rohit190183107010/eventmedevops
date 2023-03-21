import * as k8s from "@pulumi/kubernetes";
import * as gcp from "@pulumi/gcp";
import { appNs, apiService, domainHost, environment } from "./config";
import { envSuffix } from '../index'

const environmentSuffix = envSuffix(environment);

/* TODO:

 - Expose the app created earlier using the ingress
 - Output the ingress-LoadBalancer IP
 - Please share the url with the loadbalancerIP to hit the service endpoint.
*/

// create certificate manager 
const ingressNS = new k8s.core.v1.Namespace(`ingress${environmentSuffix}`, {metadata: { name: `ingress${environmentSuffix}` }});

 //  Create an ingress for the app
const ingress = new k8s.networking.v1.Ingress(`api-ingress${environmentSuffix}`, {
    metadata: {
        namespace: appNs,
        annotations: {
            "kubernetes.io/ingress.class": "gce",
            "kubernetes.io/ingress.allow-http": "true",
        },
        name: `api-ingress${environmentSuffix}`,
    },
    spec: {
        rules: [
            
        ],
     },
  }, )


