// Insert handwritten tags
const elementsWithTags = document.querySelectorAll('.handwritten-tag')

elementsWithTags.forEach((element) => {
  const tagName = element.tagName.toLowerCase()
  const customTag = element.dataset.handwrittenTag ?? tagName

  const openTag = document.createElement('span')
  openTag.classList.add('qwitcher-grypen')
  openTag.innerHTML = `&#60;${customTag}&#62;`

  const closeTag = document.createElement('span')
  closeTag.classList.add('qwitcher-grypen')
  closeTag.innerHTML = `&#60;/${customTag}&#62;`

  element.insertAdjacentElement('afterbegin', openTag)
  element.insertAdjacentElement('beforeend', closeTag)
})

// Match system aspect preferences
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  darkMode()
}

function darkMode() {
  const body = document.body
  const isDarkMode = body.classList.toggle('dark-mode')
  const themeColor = isDarkMode ? '#34495f' : '#ffffff'
  const darkModeIcon = document.getElementById('dark-mode-icon')

  darkModeIcon.classList.toggle('fa-sun', isDarkMode)
  darkModeIcon.classList.toggle('fa-moon', !isDarkMode)
  document.querySelector("meta[name='theme-color']").content = themeColor
}

const dateDifferenceInYears = (dateInitial, dateFinal) => {
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365
  return (dateFinal - dateInitial) / millisecondsPerYear
}

document.addEventListener('DOMContentLoaded', () => {
  const dateInitial = new Date('2015-03-01')
  const dateFinal = new Date()
  const yearsDifference = dateDifferenceInYears(dateInitial, dateFinal)

  const sharedDescription = document.getElementById('shared-description')

  const updatedDescriptionWithTags = sharedDescription.content.replace(
    '{{years}}',
    '<strong>' + yearsDifference.toFixed() + ' years</strong>'
  )
  const updatedDescription = sharedDescription.content.replace(
    '{{years}}',
    yearsDifference.toFixed() + ' years'
  )

  const ldJsonScript = document.querySelector(
    'script[type="application/ld+json"]'
  )
  if (ldJsonScript) {
    const ldJson = JSON.parse(ldJsonScript.innerHTML)
    ldJson['@graph'][0].description = updatedDescription
    ldJsonScript.innerHTML = JSON.stringify(ldJson, null, 2)
  }

  document.getElementById('description').innerHTML = updatedDescriptionWithTags
})
