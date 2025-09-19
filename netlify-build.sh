#!/bin/bash
echo "This is a Vite project, not a Next.js project"
echo "NETLIFY_USE_NEXTJS=false" >> .env
npm run build