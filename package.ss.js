#!/usr/bin/env node
/* eslint-disable no-console */
const childProcess = require("child_process")

const [
  nodeBinPath,
  thisFilePath,
  command,
  scope,
  item,
  ...rawOptions
] = process.argv

const options =
  rawOptions && rawOptions.length > 0
    ? rawOptions.reduce((acc, option) => {
        acc += `${option} `
        return acc
      }, "")
    : ""

switch (command) {
  case "yarn-add":
    childProcess.exec(
      `yarn add @bit/seamonster-studios.react.${scope}.${item} ${options}`,
      (error) => {
        error ? console.error(error) : console.log("success")
      },
    )
    break
  case "bit-add":
    childProcess.exec(
      `bit add src/${scope}/${item} -t 'src/__tests__/{PARENT}.spec.js' ${options}`,
      (error) => {
        error ? console.error(error) : console.log("success")
      },
    )
    break
  case "tag":
    childProcess.exec(`bit tag ${scope}/${item}`, (error) => {
      error ? console.error(error) : console.log("success")
    })
    break
  case "import":
    childProcess.exec(
      `bit import seamonster-studios.react/${scope}/${item} ${options}`,
      (error) => {
        error ? console.error(error) : console.log("success")
      },
    )
    break
  case "export":
    childProcess.exec(
      `bit tag ${scope}/${item} && bit export seamonster-studios.react ${scope}/${item} ${options}`,
      (error) => {
        error ? console.error(error) : console.log("success")
      },
    )
    break
    // TODO: This currently won't work b/c Bit always asks for verification that you want to remove the component.
  // Figure out how to work around this (with using confirmation)
  // case "remove":
  //   childProcess.exec(
  //     `bit remove seamonster-studios.react ${scope}/${item} ${options}`,
  //     (error) => {
  //       error ? console.error(error) : console.log("success")
  //     },
  //   )
  //   break
  default:
    console.error("Woops! command provided wasn't found in package.sms.bit.js")
    break
}
