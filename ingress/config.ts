import * as gcp from "@pulumi/gcp";
import { Config, Input } from "@pulumi/pulumi";
import { PulumiFn } from "@pulumi/pulumi/automation";


const config = new Config();

export const appNs = config.get("appNs");

export const apiService = config.get("apiService") as Input<string>;

export const domainHost = config.get("domainHost") as string;

export const environment = config.get("environment") as string;