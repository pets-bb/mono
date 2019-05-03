import sh from 'sh-exec'

import pkgJSON from '../package.json'

const { CIRCLE_BRANCH, GITHUB_TOKEN } = process.env

const deploymentPackagesSet = new Set(['ts-check-cli', 'ts-base'])

const tokenRepo = `https://${pkgJSON.repository
  .replace(/^git@/, `${GITHUB_TOKEN}@`)
  .replace(':', '/')}`

const branch = CIRCLE_BRANCH as 'master' | 'stage'
const branchHookPrefix = {
  master: 'prod',
  stage: 'sta',
}[branch] as 'prod' | 'sta'

const getDeploymentPackages = async () => {
  const stdout = await sh`git diff --name-only HEAD~1      `
  console.log(stdout.match(/^packages\/([^/]+)/gm) || [])
  const modifiedPaths = (stdout.match(/^packages\/([^/]+)/gm) || []).map(
    filePath => filePath.split('/')[1],
  )

  const uniqPackages = [...new Set(modifiedPaths)].filter((pkg: string) =>
    deploymentPackagesSet.has(pkg),
  )

  return uniqPackages
}
;(async () => {
  const modifiedPackages = await getDeploymentPackages().catch(console.error)

  if (Array.isArray(modifiedPackages)) {
    if (modifiedPackages.length) {
      sh`
        git config --global user.name CircleCI
        git config --global user.email mono_deploy@circleci.com
      `
      console.log(
        `
        git push ${tokenRepo} --force ${modifiedPackages
          .map(pkg => `HEAD:${branchHookPrefix}/${pkg}`)
          .join(' ')}
      `,
      )
      sh.quiet`
        git push ${tokenRepo} --force ${modifiedPackages
        .map(pkg => `HEAD:${branchHookPrefix}/${pkg}`)
        .join(' ')}
      `
    } else {
      console.log(`No branches be deployed.`)
    }
  }
})()
