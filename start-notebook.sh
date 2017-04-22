#!/bin/bash
# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

set -e

. /usr/local/bin/start.sh jupyter notebook --NotebookApp.iopub_data_rate_limit=10000000000 $*

