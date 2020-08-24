
// import html2canvas from 'html2canvas'
// import Canvg from 'canvg'

let skins: string[] = ['ffdbb4', 'edb98a', 'fd9841', 'fcee93', 'd08b5b', 'ae5d29', '614335']
let eyes: string[] = ['default', 'dizzy', 'eyeroll', 'happy', 'close', 'hearts', 'side', 'wink', 'squint', 'surprised', 'winkwacky', 'cry']
let eyebrows: string[] = ['default', 'default2', 'raised', 'sad', 'sad2', 'unibrow', 'updown', 'updown2', 'angry', 'angry2']
let mouths: string[] = ['default', 'twinkle', 'tongue', 'smile', 'serious', 'scream', 'sad', 'grimace', 'eating', 'disbelief', 'concerned', 'vomit']
let hairstyles: string[] = ['bold', 'longhair', 'longhairbob', 'hairbun', 'longhaircurly', 'longhaircurvy', 'longhairdread', 'nottoolong', 'miawallace', 'longhairstraight', 'longhairstraight2', 'shorthairdreads', 'shorthairdreads2', 'shorthairfrizzle', 'shorthairshaggy', 'shorthaircurly', 'shorthairflat', 'shorthairround', 'shorthairwaved', 'shorthairsides']
let haircolors: string[] = ['bb7748_9a4f2b_6f2912', '404040_262626_101010', 'c79d63_ab733e_844713', 'e1c68e_d0a964_b88339', '906253_663d32_3b1d16', 'f8afaf_f48a8a_ed5e5e', 'f1e6cf_e9d8b6_dec393', 'd75324_c13215_a31608', '59a0ff_3777ff_194bff']
let facialhairs: string[] = ['none', 'magnum', 'fancy', 'magestic', 'light']
let clothes: string[] = ['vneck', 'sweater', 'hoodie', 'overall', 'blazer']
let fabriccolors: string[] = ['545454', '65c9ff', '5199e4', '25557c', 'e6e6e6', '929598', 'a7ffc4', 'ffdeb5', 'ffafb9', 'ffffb1', 'ff5c5c', 'e3adff']
let backgroundcolors: string[] = ['ffffff', 'f5f6eb', 'e5fde2', 'd5effd', 'd1d0fc', 'f7d0fc', 'd0d0d0']
let glasses :string[] = ['none', 'rambo', 'fancy', 'old', 'nerd', 'fancy2', 'harry']
let glassopacities: string[] = ['10', '25', '50', '75', '100']
let tattoos: string[] = ['non', 'harry', 'airbender', 'krilin', 'front', 'tribal', 'tribal2', 'throat']
let accesories: string[] = ['none', 'earphones', 'earring1', 'earring2', 'earring3', 'eyepatch']
let current_skincolor: string = 'edb98a'
let current_hairstyle: string = 'longhair'
let current_haircolor: string = 'bb7748_9a4f2b_6f2912'
let current_fabriccolors: string = '545454'
let current_backgroundcolors: string = 'ffffff'
let current_glassopacity:number = 0.5

document.addEventListener('DOMContentLoaded', () => {
  // function SVG2PNG (svg, callback) {
  //   var canvas = document.createElement('canvas') // Create a Canvas element.
  //   var ctx = canvas.getContext('2d') // For Canvas returns 2D graphic.
  //   var data = svg.outerHTML // Get SVG element as HTML code.
  //   canvg(canvas, data) // Render SVG on Canvas.
  //   console.log(canvas)
  //   callback(canvas) // Execute callback function.
  // }

  function generateLink (fileName:any, data:any) {
    var link = document.createElement('a')
    link.download = fileName
    link.href = data
    return link
  }

  // document.getElementById('download').onclick = function () { // Bind click event on download button.
  //   console.log('button')
  //   var element = document.getElementById('hair_back') // Get SVG element.
  //   SVG2PNG(element, function (canvas) { // Arguments: SVG element, callback function.
  //     var base64 = canvas.toDataURL('image/png') // toDataURL return DataURI as Base64 format.
  //     generateLink('SVG2PNG-01.png', base64).click() // Trigger the Link is made by Link Generator and download.
  //   })
  // }

  // $('body').delegate('#menu_lines', 'click', function () {
  //   menu_class = $('#menu').attr('class')
  //   if (menu_class === '') {
  //     $('#menu').addClass('active')
  //     $('#menu').css({
  //       border: '0px'
  //     })
  //     $('#menu').stop().animate({
  //       width: '360px'
  //     }, {
  //       duration: 300,
  //       complete: function () {
  //         $(this).stop().animate({
  //           height: '460px'
  //         }, {
  //           duration: 300
  //         })
  //       }
  //     })
  //   } else {
  //     $('#menu').removeClass('active')
  //     $('#menu').css({
  //       'border-right': '1px solid #707070'
  //     })
  //     $('#menu').stop().animate({
  //       height: '99px'
  //     }, {
  //       duration: 300,
  //       complete: function () {
  //         $(this).stop().animate({
  //           width: '60px'
  //         }, {
  //           duration: 300
  //         })
  //       }
  //     })
  //   }
  // })

  document.addEventListener('click', (event: any) => { // Run your code to open a modal
    if (event.target.matches('button')) {
      const idx = event.target.getAttribute('id')

      if (idx === 'download') {
        var current_eyes
        document.querySelectorAll('#eyes g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            let id = link.target.getAttribute('id')
            current_eyes = id.substr(2)
          }
        })
        var current_eyebrows
        document.querySelectorAll('#eyebrows g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            const id = link.target.getAttribute('id')
            current_eyebrows = id.substr(2)
          }
        })
        var current_mouth
        document.querySelectorAll('#facialhair g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            const id = link.target.getAttribute('id')
            current_mouth = id.substr(2)
          }
        })
        var current_facialhair = 'none'
        document.querySelectorAll('#facialhair g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            const id = link.target.getAttribute('id')
            current_facialhair = id.substr(2)
          }
        })
        var current_clothe
        document.querySelectorAll('#clothes g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            const id = link.target.getAttribute('id')
            current_clothe = id.substr(2)
          }
        })
        var current_glasses = 'none'
        document.querySelectorAll('#glasses g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            const id = link.target.getAttribute('id')
            current_glasses = id.substr(2)
          }
        })
        var current_tattoos = 'none'
        document.querySelectorAll('#tattoos g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            const id = link.target.getAttribute('id')
            current_tattoos = id.substr(2)
          }
        })

        var current_accesories = 'none'
        document.querySelectorAll('#accesories g').forEach((link: any) => {
          if ((link as HTMLElement).style.display === 'inline') {
            const id = link.target.getAttribute('id')
            current_accesories = id.substr(2)
          }
        })

        // var url = `https://vitruvianman.000webhostapp.com/avatarmaker/avatar.php?skincolor=${ current_skincolor }`
        // url += `&hairstyle=${ current_hairstyle }`
        // url += `&haircolor=${ current_haircolor }`
        // url += `&fabriccolors=${ current_fabriccolors }`
        // url += `&eyes=${ current_eyes }`
        // url += `&eyebrows=${ current_eyebrows }`
        // url += `&mouth=${ current_mouth }`
        // url += `&facialhair=${ current_facialhair }`
        // url += `&clothe=${ current_clothe }`
        // url += `&backgroundcolor=${ current_backgroundcolors }`
        // url += `&glasses=${ current_glasses }`
        // url += `&glassopacity=${ current_glassopacity }`
        // url += `&tattoos=${ current_tattoos }`
        // url += `&accesories=${ current_accesories }`
        // window.open(url)
        console.log('download')
        // html2canvas([document.getElementById('mydiv')], {
        //   onrendered: function (canvas) {
        //     document.body.appendChild(canvas)
        //     var data = canvas.toDataURL('image/png')
        //     // AJAX call to send `data` to a PHP file that creates an image from the dataURI string and saves it to a directory on the server
        //   }
        // })
        var container = document.getElementById('avatar')// full page
        // html2canvas(container, {
        //   onrendered: function (canvas) {
        //     document.body.appendChild(canvas)
        //     var data = canvas.toDataURL('image/png')
        //     // AJAX call to send `data` to a PHP file that creates an image from the dataURI string and saves it to a directory on the server
        //     console.log(data)
        //     document.write(`<span style="font:14px normal Helvetica, Arial; font-weight: bold; color:#13a6f5; margin-left:16px">the resulted png:</span> <br /><img src="${ data }"/>`)

        //     // window.open(data, '_blank')

        //     var a = document.createElement('a')
        //     // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        //     a.href = data.replace('image/jpeg', 'image/octet-stream')
        //     a.download = 'somefilename.png'
        //     // a.click();
        //   }
        // })
        // var element = document.getElementById('avatar') // Get SVG element.
        // SVG2PNG(element, function (canvas) { // Arguments: SVG element, callback function.
        //   var base64 = canvas.toDataURL('image/png') // toDataURL return DataURI as Base64 format.
        //   generateLink('SVG2PNG-01.png', base64).click() // Trigger the Link is made by Link Generator and download.
        // })
      } else {
        console.log(event.target)
        var selected = event.target
        document.querySelector('#options_title').innerHTML = `SELECT ${ selected.innerHTML }`
        document.querySelector('#options_div').innerHTML = ''
        var html = ''
        switch (idx) {
          case 'skincolor':
            for (var i = 0; i < skins.length; i++) {
              let skin = skins[i]
              html += `<div class='skins' id='s_${ skin }' style='background-color:#${ skin };'></div>`
            }
            break
          case 'eyes':
            for (i = 0; i < eyes.length; i++) {
              let eye = eyes[i]
              html += `<div class='eyes' id='e_${ eye }' style='background-color:#${ current_skincolor };background-position:${ i * -53 }px 0px;'></div>`
            }
            break
          case 'eyebrows':
            for (i = 0; i < eyebrows.length; i++) {
              let eyebrow = eyebrows[i]
              html += `<div class='eyebrows' id='eb_${ eyebrow }' style='background-color:#${ current_skincolor };background-position:${ i * -53 }px -53px;'></div>`
            }
            break
          case 'mouths':
            for (i = 0; i < mouths.length; i++) {
              let mouth = mouths[i]
              html += `<div class='mouths' id='m_${ mouth }' style='background-color:#${ current_skincolor };background-position:${ i * -53 }px -106px;'></div>`
            }
            break
          case 'hairstyles':
            for (i = 0; i < hairstyles.length; i++) {
              let hairstyle = hairstyles[i]
              html += `<div class='hairstyles' id='h_${ hairstyle }' style='background-color:#ffffff;background-position:${ i * -53 }px -159px;'></div>`
            }
            break
          case 'haircolors':
            for (i = 0; i < haircolors.length; i++) {
              let haircolor = haircolors[i]
              let haircolor_front = haircolor.split('_')
              html += `<div class='haircolors' id='hc_${ haircolor }' style='background-color:#${ haircolor_front[0] };'></div>`
            }
            break
          case 'facialhairs':
            for (i = 0; i < facialhairs.length; i++) {
              let facialhair = facialhairs[i]
              let haircolor_front = facialhair.split('_')
              html += `<div class='facialhairs' id='f_${ facialhair }' style='background-color:#ffffff;background-position:${ i * -53 }px -212px;'></div>`
            }
            break
          case 'clothes':
            for (var i = 0; i < clothes.length; i++) {
              let clothe = clothes[i]
              html += `<div class='clothes' id='c_${ clothe }' style='background-color:#ffffff;background-position:${ i * -53 }px -265px;'></div>`
            }
            break
          case 'fabriccolors':
            for (var i = 0; i < fabriccolors.length; i++) {
              let fabriccolor = fabriccolors[i]
              html += `<div class='fabriccolors' id='f_${ fabriccolor }' style='background-color:#${ fabriccolor };'></div>`
            }
            break
          case 'backgroundcolors':
            for (var i = 0; i < backgroundcolors.length; i++) {
              let backgroundcolor = backgroundcolors[i]
              html += `<div class='backgroundcolors' id='g_${ backgroundcolor }' style='background-color:#${ backgroundcolor };'></div>`
            }
            break
          case 'glasses':
            for (var i = 0; i < glasses.length; i++) {
              let glass = glasses[i]
              html += `<div class='glasses' id='g_${ glass }' style='background-color:#ffffff;background-position:${ i * -53 }px -313px;'></div>`
            }
            break
          case 'glassopacity':
            for (var i = 0; i < glassopacities.length; i++) {
              let glassopacity = glassopacities[i]
              html += `<div class='glassopacity' id='o_${ glassopacity }' style='background-color:#ffffff;'>${ glassopacity }%</div>`
            }
            break
          case 'tattoos':
            for (var i = 0; i < tattoos.length; i++) {
              let tattoo = tattoos[i]
              html += `<div class='tattoos' id='t_${ tattoo }' style='background-color:#ffffff;background-position:${ i * -53 }px -419px;'></div>`
            }
            break
          case 'accesories':
            for (var i = 0; i < accesories.length; i++) {
              let accesory = accesories[i]
              html += `<div class='accesories' id='a_${ accesory }' style='background-color:#ffffff;background-position:${ i * -53 }px -369px;'></div>`
            }
            break
        }
        // $('#options_div').html(html)
        // $('#menu_lines').click()
        document.querySelector('#options_div').innerHTML = html
        document.querySelector('#menu_lines').click()
      }
    }

    // ------------------------------------------------------------------------
    if (event.target.matches('#random')) {
      random()
    }
    if (event.target.matches('#menu_lines')) { // animation menu
      const menu = document.querySelector('#menu')
      const menu_class = menu.getAttribute('class')
      if (menu_class === '') {
        (menu as HTMLElement).classList.add('active');
        (menu as HTMLElement).style.border = '0px';
        (menu as HTMLElement).style.width = '360px';
        (menu as HTMLElement).style.height = '460px';
      } else {
        (menu as HTMLElement).classList.remove('active');
        (menu as HTMLElement).style.borderRight = '1px solid #707070';
        (menu as HTMLElement).style.height = '99px';
        (menu as HTMLElement).style.width = '60px';
      }
    }
    if (event.target.matches('.skins')) {
      let id = event.target.getAttribute('id')
      id = id.substr(2)
      current_skincolor = id
      document.querySelector('#skin #body').style.fill = `#${ id }`
    }
    if (event.target.matches('.eyes')) {
      const id = event.target.getAttribute('id').substr(2)
      document.querySelectorAll('#eyes g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelector(`#eyes #e_${ id }`).style.display = 'block'
    }
    if (event.target.matches('.eyebrows')) {
      const id = event.target.getAttribute('id').substr(3)
      document.querySelectorAll('#eyebrows g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelector(`#eyebrows #eb_${ id }`).style.display = 'block'
    }
    if (event.target.matches('.mouths')) {
      const id = event.target.getAttribute('id').substr(2)
      document.querySelectorAll('#mouths g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelector(`#mouths #m_${ id }`).style.display = 'block'
    }
    if (event.target.matches('.hairstyles')) {
      let id = event.target.getAttribute('id')
      id = id.substr(2)
      current_hairstyle = id
      document.querySelectorAll('#hair_front g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelectorAll(`#hair_back .h_${ id }`).forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelectorAll(`#hair_front .h_${ id }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
      document.querySelectorAll(`#clothes #c_${ id }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
      current_hairstyle = id
      id = id.split('_')
      let color:any = current_haircolor
      color = color.split('_')
      document.querySelectorAll(`#hair_front .h_${ current_hairstyle } .tinted`)
        .forEach(link => { (link as HTMLElement).style.fill = `#${ color[0] }` })
      document.querySelectorAll(`#hair_back .h_${ current_hairstyle } .tinted`)
        .forEach(link => { (link as HTMLElement).style.fill = `#${ color[1] }` })
      document.querySelectorAll('#facialhair g .tinted')
        .forEach(link => { (link as HTMLElement).style.fill = `#${ color[2] }` })
    }

    if (event.target.matches('.haircolors')) {
      let id = event.target.getAttribute('id')
      id = id.substr(3)
      current_haircolor = id
      id = id.split('_')
      document.querySelectorAll(`#hair_front .h_${ current_hairstyle } .tinted`)
        .forEach(link => { (link as HTMLElement).style.fill = `#${ id[0] }` })
      document.querySelectorAll(`#hair_back .h_${ current_hairstyle } .tinted`)
        .forEach(link => { (link as HTMLElement).style.fill = `#${ id[1] }` })
      document.querySelectorAll('#facialhair g .tinted')
        .forEach(link => { (link as HTMLElement).style.fill = `#${ id[2] }` })
    }
    if (event.target.matches('.facialhairs')) {
      const id = event.target.getAttribute('id').substr(2)
      document.querySelectorAll('#facialhair g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelectorAll(`#facialhair #f_${ id }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
    }
    if (event.target.matches('.clothes')) {
      const id = event.target.getAttribute('id').substr(2)
      document.querySelectorAll('#clothes g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelectorAll(`#clothes #c_${ id }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
    }
    if (event.target.matches('.fabriccolors')) {
      const id = event.target.getAttribute('id').substr(2)
      console.log(id)
      current_fabriccolors = id
      document.querySelectorAll('#clothes g .tinted').forEach(link => { (link as HTMLElement).style.fill = `#${ id }` })
    }
    if (event.target.matches('.backgroundcolors')) {
      const id = event.target.getAttribute('id').substr(2)
      current_backgroundcolors = id
      document.querySelector('#background').style.fill = `#${ id }`
    }
    if (event.target.matches('.glasses')) {
      const id = event.target.getAttribute('id').substr(2)
      document.querySelectorAll('#glasses g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelectorAll(`#glasses #g_${ id }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
    }
    if (event.target.matches('.glassopacity')) {
      let id = event.target.getAttribute('id')
      id = parseInt(id.substr(2))
      current_glassopacity = id / 100
      document.querySelectorAll('.glass').forEach((link:any) => { link.style.opacity = current_glassopacity })
    }
    if (event.target.matches('.tattoos')) {
      const id = event.target.getAttribute('id').substr(2)
      document.querySelectorAll('#tattoos g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelectorAll(`#tattoos #t_${ id }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
    }
    if (event.target.matches('.accesories')) {
      const id = event.target.getAttribute('id').substr(2)
      document.querySelectorAll('#accesories g').forEach(link => { (link as HTMLElement).style.display = 'none' })
      document.querySelector(`#accesories #a_${ id }`).style.display = 'block'
    }
  }, false)
  random()
})

function random () {
  var rand_skins = skins[Math.floor(Math.random() * skins.length)]
  var rand_eyes = eyes[Math.floor(Math.random() * eyes.length)]
  var rand_eyebrows = eyebrows[Math.floor(Math.random() * eyebrows.length)]
  var rand_mouths = mouths[Math.floor(Math.random() * mouths.length)]
  var rand_hairstyles = hairstyles[Math.floor(Math.random() * hairstyles.length)]
  var rand_haircolors = haircolors[Math.floor(Math.random() * haircolors.length)]
  var rand_facialhairs = facialhairs[Math.floor(Math.random() * facialhairs.length)]
  var rand_clothes = clothes[Math.floor(Math.random() * clothes.length)]
  var rand_fabriccolors = fabriccolors[Math.floor(Math.random() * fabriccolors.length)]
  var rand_backgroundcolors = backgroundcolors[Math.floor(Math.random() * backgroundcolors.length)]
  var rand_glasses = glasses[Math.floor(Math.random() * glasses.length)]
  var rand_glassopacities = parseInt(glassopacities[Math.floor(Math.random() * glassopacities.length)]) / 100
  var rand_tattoos = tattoos[Math.floor(Math.random() * tattoos.length)]
  var rand_accesories = accesories[Math.floor(Math.random() * accesories.length)]
  current_skincolor = rand_skins
  current_fabriccolors = rand_fabriccolors
  current_backgroundcolors = rand_backgroundcolors
  current_glassopacity = rand_glassopacities

  document.querySelector('#skin #body').style.fill = `#${ rand_skins }`
  document.querySelectorAll('#eyes g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelector(`#eyes #e_${ rand_eyes }`).style.display = 'block'
  document.querySelectorAll('#eyebrows g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelector(`#eyebrows #eb_${ rand_eyebrows }`).style.display = 'block'

  document.querySelectorAll('#mouths g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelector(`#mouths #m_${ rand_mouths }`).style.display = 'block'
  current_hairstyle = rand_hairstyles
  document.querySelectorAll('#hair_front g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelectorAll('#hair_back g').forEach(link => { (link as HTMLElement).style.display = 'none' })

  document.querySelectorAll(`#hair_front .h_${ rand_hairstyles }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
  document.querySelectorAll(`#hair_back .h_${ rand_hairstyles }`).forEach(link => { (link as HTMLElement).style.display = 'block' })

  current_haircolor = rand_haircolors
  let color = current_haircolor.split('_')
  // color = color.split('_')
  document.querySelectorAll(`#hair_front .h_${ current_hairstyle } .tinted`).forEach(link => { (link as HTMLElement).style.fill = `#${ color[0] }` })
  document.querySelectorAll(`#hair_back .h_${ current_hairstyle } .tinted`).forEach(link => { (link as HTMLElement).style.fill = `#${ color[1] }` })
  document.querySelectorAll('#facialhair g .tinted').forEach(link => { (link as HTMLElement).style.fill = `#${ color[2] }` })
  document.querySelectorAll('#facialhair g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelectorAll(`#facialhair #f_${ rand_facialhairs }`).forEach(link => { (link as HTMLElement).style.display = 'block' })

  document.querySelectorAll('#clothes g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelectorAll(`#clothes #c_${ rand_clothes }`).forEach(link => { (link as HTMLElement).style.display = 'block' })

  document.querySelectorAll('#glasses g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelectorAll(`#glasses #g_${ rand_glasses }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
  document.querySelectorAll('.glass').forEach((link:any) => link.style.opacity = rand_glassopacities)

  document.querySelectorAll('#clothes g .tinted').forEach(link => { (link as HTMLElement).style.fill = `#${ rand_fabriccolors }` })
  document.querySelector('#background').style.fill = `#${ rand_backgroundcolors }`
  document.querySelectorAll('#tattoos g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelectorAll(`#tattoos #t_${ rand_tattoos }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
  document.querySelectorAll('#accesories g').forEach(link => { (link as HTMLElement).style.display = 'none' })
  document.querySelectorAll(`#accesories #a_${ rand_accesories }`).forEach(link => { (link as HTMLElement).style.display = 'block' })
}
