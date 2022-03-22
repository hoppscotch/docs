---
title: Hoppscotch CLI
menuTitle: CLI
category: Getting started
position: 5
---

Hoppscotch gives you multiple ways to interact with and configure your APIs. With the command-line interface (CLI) you can interact with the Hoppscotch platform using a terminal, or through an automated system, enabling you to run API tests, manage automated API monitoring, and more.

This page contains a complete list of all Hoppscotch CLI commands available, alongside their optional parameters for additional behavior, as well as a complete list of configuration options to configure your APIs through Hoppscotch.

<alert type="warning">
Hoppscotch CLI is currently in alpha. <a href="https://github.com/hoppscotch/hoppscotch/issues/new/choose">Please report any issues you encounter.</a>
</alert>

## Installing the CLI

To download and install Hoppscotch CLI, run the following command:

```bash
npm i -g @hoppscotch/cli
```

## Commands

| Command     | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `hopp test` | Execute all available test scripts in the given Hoppscotch collection. |
| `hopp help` | List of all available Hoppscotch CLI commands and options.             |

## `hopp test`

The `hopp test` command allows you to run tests against a Hoppscotch collection file. This command goes through every request in a collection recursively and runs it, validating the responses with the test script provided in each request.

## Usage

```bash
hopp test <hoppscotch collection file>
```

## Example

```bash
hopp test kitchen-sink-hoppscotch-collection.json
```

## Behavior

- The `hopp test` command recursively goes through each request in the collection and runs them. Hence, the order of execution is the same as the order specified in the collection structure.
- If upon executing the command, a failed assertion (a failing test case) has occurred, the command will give a non-zero exit code and 0 exit code if all tests have passed.
- Unless there was a network error (for e.g, DNS resolution errors, Network Connectivity Issues), the test script will be running and it is up to the test script to define what happens to error status codes. Non-200 status codes are still considered valid responses for test script execution.

## Options

- `-h`: Gives a list of associated commands and their descriptions
