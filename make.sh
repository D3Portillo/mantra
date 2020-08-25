#!/bin/bash

node makeGYP
npx node-gyp configure
npx node-gyp build