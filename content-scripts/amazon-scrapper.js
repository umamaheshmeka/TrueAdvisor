(function(){
    let product_data = new Object()

    //Title
    let title = document.getElementById('productTitle').innerText
    product_data.title = title
    console.log('title:'+title)

    //Short description
    let short_desc_li = document.querySelectorAll('#feature-bullets ul li:not(#replacementPartsFitmentBullet) span.a-list-item');
    let short_desc = '<ul>'
    short_desc_li.forEach(function(item){
      short_desc += '<li>'+item.innerText+'</li>'
    })
    short_desc += '</ul>'
    product_data.short_desc = short_desc

    //technical specification
    let tech_spec = '<table>'
    let tech_spec_summery = document.querySelectorAll('#productDetails_techSpec_section_1 tr')

    tech_spec_summery.forEach(function(row){
        tech_spec += '<tr><th>'+row.cells[0].textContent+'</th><td>'+row.cells[1].textContent+'</td></tr>'
    })
    let tech_spec_detail = document.querySelectorAll('#productDetails_techSpec_section_2 tr')
    tech_spec_detail.forEach(function(row){
        tech_spec += '<tr><th>'+row.cells[0].textContent+'</th><td>'+row.cells[1].textContent+'</td></tr>'
    })
    tech_spec += '</table>'
    product_data.tech_spec = tech_spec

    //Images
    let images = document.querySelectorAll('#main-image-container ul li.image.item img')
    let sourceArray = Array.from(images).map(function(image){
      return image.src
    })
    product_data.images = sourceArray

     let ingredients = document.querySelectorAll('#productOverview_feature_div a-section table.a-normal tbody tr')
    console.log(ingredients.values())
    // const table =
    //     Array.from(document.querySelectorAll('.productOverview_feature_div .a-section .table.a-normal tbody tr'), tr =>
    //         Array.from(tr.querySelectorAll('td'), td =>
    //             td.textContent
    //         )
    //     )
    //
    // console.log(table.forEach())
    // let table_data = Array.from(ingredients.)
    // console.log(htmlToArray(ingredients))
    return product_data
  })()