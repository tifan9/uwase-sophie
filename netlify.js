// netlify.js
// This file tells Netlify that this is NOT a Next.js project
// and prevents the Next.js plugin from running

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is a Vite project, not a Next.js project"
    })
  };
};

// Explicitly set that we're not using Next.js
exports.isNextJs = false;