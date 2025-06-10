npm i

if(-Not (Test-Path "./package.json") ) {
    Write-Error "Could not locate config file!"
    exit 1
}

Write-Host "Running NPM"

npm run dev

# test next app
if(Test-Path "./node_modules/./bin/next") {
    Write-Host "Running Next App"
    .\node_modules\.\bin\next dev
} else {
    Write-Warning "Could not locate Next App"
}
