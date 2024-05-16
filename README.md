# The Pf2ools Schema

A project in the [Pf2ools](https://github.com/Pf2ools) ecosystem to define a schema for Pathfinder 2nd Edition game content. We use [Zod](https://zod.dev/) to development the schema in TypeScript, from which we generate a mostly identical [JSON Schema](http://json-schema.org/) for general use.

- [How to validate your Pf2ools data](#how-to-validate-your-pf2ools-data)
  - [Using with Pf2ools Data](#using-with-pf2ools-data)
  - [In-editor validation](#in-editor-validation)
- [Contributing](#contributing)
- [Legal](#legal)

## How to validate your Pf2ools data

Beyond providing TypeScript types for developers, the Pf2ools Schema validates JSON data for the Pf2ools ecosystem. You can validate files using this simple syntax:

```
npx pf2ools-schema [--options ...] <paths ...>
```

where `<paths ...>` is one or more paths to files or directories you'd like to validate.

You can learn about the available options using `npx pf2ools-schema --help`.

#### Example

```console
$ npx pf2ools-schema -ar ./myFile.json ./myDirectory
	[Passed]  myFile.json
	[Passed]  myDirectory/file1.json
	[Failed]  myDirectory/file2.json
	[Passed]  myDirectory/nestedDirectory/moreFile.json
1 file (25%) failed validation.
```

> [!IMPORTANT]
> Pf2ools Schema requires you install [NodeJS](https://nodejs.org/) and its package manager, [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), first.

### Using with [Pf2ools Data](https://github.com/Pf2ools/pf2ools-data)

If you've made a local clone of the [Pf2ools Data](https://github.com/Pf2ools/pf2ools-data) repository, you can make use of the Pf2ools Schema automatically.

First run `npm i` within your cloned directory to install the latest dependencies. You can then either run `npx pf2ools-schema` as above to validate something in the repo, or you can use `npm run test:data` to test _everything_. Note that the latter might take a while, so it's not worth the effort if you're just working on a small piece!

Remember to re-run `npm i` whenever the schema changes!

### In-editor validation

If your code editor supports automatic schema validation, you can point it to [this](https://raw.githubusercontent.com/Pf2ools/pf2ools-schema/master/_dist/schema/data.json) file.

Alternatively, if your editor supports implicit schema validation, you can add this property to the top level of your JSON file.

```json
"$schema": "https://raw.githubusercontent.com/Pf2ools/pf2ools-schema/master/_dist/schema/data.json"
```

## Contributing

Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) or join our [Discord server](https://discord.gg/2hzNxErtVu) for more information.

## Legal

The schema and all [scripts](./scripts/) are licensed under the [MIT license](./LICENSE).
