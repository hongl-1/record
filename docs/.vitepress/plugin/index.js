import mdContainer from 'markdown-it-container'
import fs from 'fs'
import path from 'path'

export const mdPlugin = (md) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      console.log(idx)
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
      if(tokens[idx].nesting === 1) {
        let source = ''
        const sourceFileToken = tokens[idx + 2]
        const sourceFile = sourceFileToken.children?.[0].content ?? ''
        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve('/', 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `
        <div class="danger custom-block">
          <p class="custom-block-title">${md.utils.escapeHtml(m[1])}</p>`
      } else {
        return '</div>'
      }
    }
  })
}
