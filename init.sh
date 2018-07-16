#!/usr/bin/env bash
rm -rf output
rm -rf build
babel build-source --out-dir build
cd build
rm -rf dist-build