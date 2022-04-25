openPhoneTemplatePage = (tag) => {
  if (tag.querySelector("h3") != null) {
    sessionStorage.setItem("phoneName", tag.querySelector("h3").textContent)
  } else {
    sessionStorage.setItem("phoneName", "iPhone SE 2022")
  }

  while (tag.parentElement != null) {
    tag = tag.parentElement
  }

  sessionStorage.setItem("userObj", tag.querySelector("#userName").textContent)
  sessionStorage.setItem("userArray", JSON.stringify(users))
  sessionStorage.setItem("phoneArray", JSON.stringify(phones))

  window.open("phoneTemplate.html")
}