
// Functions,types commonly used by stacks in mono-repo are declared here
export const envSuffix = (environment: string) => {
    const environmentSuffix = environment === 'prod' ? '' : `-${environment}`;
    console.log(`environmentSuffix: ${environmentSuffix}`);
    return environmentSuffix;
}

