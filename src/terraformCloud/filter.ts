/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { makeParameters } from '@zodios/core';
import { z } from 'zod';

export const projectFilterParams = makeParameters([
  {
    name: 'filter[project][id]',
    type: 'Query',
    description: 'Restricts results to workspaces in the specific project',
    schema: z.string().optional(),
  },
]);