const path = require('path')
const m = require('module')

const orginalResolver = m._resolveLookupPaths

m._resolveLookupPaths = myResolver

function myResolver(request, parent) {
//   console.log({request,parent})
    let version
    if (parent.filename.includes('1.0.0')) {
        version = '1.0.0'
    }

    if (parent.filename.includes('2.0.0')) {
        version = '2.0.0'
    }

    if (request === 'top' || request==='demo') {
        return [path.join(__dirname,`./ROOT/${request}/${version}/`)]
    }
    return orginalResolver(request,parent)
}
