const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
  // Get some input values
  const bucket = core.getInput('bucket', { required: true })
  const bucketRegion = core.getInput('bucket-region', { required: true })
  const distFolder = core.getInput('dist-folder', { required: true })

  // Upload files
  const s3Uri = `s3//${bucket}`
  exec.exec(`aws s3 sync <local-folder> ${distFolder} ${s3Uri} --region ${bucketRegion}`)

  core.notice('hello from js action')
}

run()