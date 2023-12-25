# The Pf2ools Schema

A project in the [Pf2ools](https://github.com/Pf2ools) ecosystem to define a [JSON schema](http://json-schema.org/) for Pathfinder 2nd Edition game content. We also include a parallel, mostly identical [Zod schema](https://zod.dev/) for TypeScript users!

- [How to validate your Pf2ools data](#how-to-validate-your-pf2ools-data)
  - [Install and use anywhere](#install-and-use-anywhere)
  - [Using with pf2ools-data](#using-with-pf2ools-data)
  - [In-editor validation](#in-editor-validation)
- [Contributing](#contributing)
- [Legal](#legal)

## How to validate your Pf2ools data

Pf2ools Schema has one function and one function only: to validate JSON data in the Pf2ools ecosystem. The package has a simple syntax:

```
npx pf2ools-schema [--options ...] <paths ...>
```

where `<paths ...>` is one or more paths to files or directories you'd like to validate.

You can learn about the available options using `npx pf2ools-schema --help`.

#### Example

```console
$ npx pf2ools-schema -ra ./myFile.json ./myDirectory
	[Passed]  myFile.json
	[Passed]  myDirectory/file1.json
	[Failed]  myDirectory/file2.json
	[Passed]  myDirectory/nestedDirectory/moreFile.json
1 file (25%) failed validation.
```

> [!IMPORTANT]
> Pf2ools Schema requires you install [NodeJS](https://nodejs.org/) first.

### Install and use anywhere

1. Open a terminal.
2. Run `npm install -g pf2ools-schema`.
3. You can now run `npx pf2ools-schema` anywhere you like on that computer.

Remember to run `npm update -g pf2ools-schema` whenever the schema changes!

### Using with [pf2ools-data](https://github.com/Pf2ools/pf2ools-data)

If you've made a local clone of the [Pf2ools Data](https://github.com/Pf2ools/pf2ools-data) repository, you can make use of the Pf2ools Schema automatically by running `npm i`.

From there you can either run `npx pf2ools-schema` as above to validate something in the repo, or you can use `npm run test:data` to test _everything_. Note that the latter might take a while, and it's not worth the effort if you're just working on a small piece!

### In-editor validation

If your code editor supports automatic schema validation, you can point it to [this](https://raw.githubusercontent.com/Pf2ools/pf2ools-schema/master/schema/_schema.json) file.

Alternatively, if your editor supports implicit schema validation, you can add this line to the top of a JSON file.

```json
"$schema": "https://raw.githubusercontent.com/Pf2ools/pf2ools-schema/master/schema/_schema.json",
```

## Contributing

Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) or join our [Discord server](https://discord.gg/2hzNxErtVu) for more information.

## Legal

The schema and all [scripts](./scripts/) are licensed under the [MIT license](./LICENSE).
