#!/usr/bin/env node

import { Customer } from "./interfaces/Customer";
import { MovieCollection } from "./interfaces/Movie";

import { Command } from "commander";
import { statement } from "./features/statement";
import { htmlStatement } from "./features/htmlStatement";

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");

program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statement(customer, movies)));

program
  .command("html-statement")
  .description("Prints out an HTML statement for the customer")
  .action(() => console.log(htmlStatement(customer, movies)));

program.parse(process.argv);
