#!/bin/bash

npm run prestart

mv output/grammar/* output/
rm -r output/grammar

sudo npm run link

npm run test

