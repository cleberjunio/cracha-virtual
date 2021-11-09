const LinksSocialMedia = {
    github: 'cleberjunio',
    linkedin: 'in/cleber-junio-7b999967',
    facebook: 'cleberjunio.junio',
    instagram: 'juniocleberjunio',
    twitter: 'CJMT77'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
            // alert(li.children[0].href)
    }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
        //O fetch vai buscar na url que está guardando os dados do usuário da api gitHub.
        //O then(então) pega a resposta e transforma em json
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userPhoto.src = data.avatar_url
            userLogin.textContent = data.login
        }) //armazena a resposta em json
}
getGitHubProfileInfos()