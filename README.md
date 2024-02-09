This is a starter [Next.js](https://nextjs.org/) site to test the Next.js Minimal Runtime.

## Getting Started 

Recommended setup:

1. Download this repo to a new directory and open in a new [VSCode](https://code.visualstudio.com/) workspace.
2. Run `npm install` to install the dependencies.
3. Run `ntl sites:create` to link to a Netlify site for testing.

After setting up the site, ensure you have the [Next.js Minimal Runtime](https://github.com/netlify/next-minimal-runtime) repo cloned in an adjacent directory named 'next-runtime-minimal' and add it to the VSCode workspace so you can work on both together.

## Development

After making changes to the Next.js Minimal Runtime, run one of the build tasks (build, deploy or serve) to test your changes with this demo site. You can do this by running the `Tasks: Run Task` command in VSCode or with the Cmd+Shift+B shortcut. Note that running any of the build tasks will first run a `tsc` in the minimal runtime directory to compile the latest source.

## Debugging

To debug the Next.js Minimal Runtime, set a breakpoint in the source code and run the `Debug: Start Debugging` command in VSCode or use the F5 shortcut. This will start a build of the demo site with the runtime and attach the VSCode debugger to it. Before starting, the debug workflow will first run a `tsc --sourceMap` in the minimal runtime directory.

