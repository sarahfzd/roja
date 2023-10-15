var basket = [];
var Products = [];
var bodyShower1 = {
    id: 4444401,
    image: "assets/img/category-bodyShower/1.jpeg",
    enTitle: "Face & Body Care Syndet Gel 200ml SCALPIA",
    faTitle: "ژل شستشوی غیرصابونی صورت و بدن پوست چرب و جوش‌دار اسکالپیا",
    price: 114700,
    discountPercent: 40
}
var bodyShower2 = {
    id: 4444402,
    image: "assets/img/category-bodyShower/2.jpeg",
    enTitle: "Face & Body Care Syndet Gel 200ml SCALPIA",
    faTitle: "ژل روشن کننده غیر صابونی صورت و بدن اسکالپیا",
    price: 114700,
    discountPercent: 30
}
var bodyShower3 = {
    id: 4444403,
    image: "assets/img/category-bodyShower/3.jpeg",
    enTitle: "Syndet gel face & body care 200ml SCALPIA",
    faTitle: "ژل شوینده غیرصابونی مناسب پوست های خشک و حساس اسکالپیا",
    price: 114700,
    discountPercent: 30
}
var bodyShower4 = {
    id: 4444404,
    image: "assets/img/category-bodyShower/4.jpeg",
    enTitle: "BODY CARE spa and argan CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه اسپا و آرگان هیدرودرم",
    price: 79000,
    discountPercent: 30
}
var bodyShower5 = {
    id: 4444405,
    image: "assets/img/category-bodyShower/5.jpeg",
    enTitle: "BoDY WASH Peony JUTE",
    faTitle: "شامپو بدن پیونی ژوت",
    price: 115000,
    discountPercent: 25
}
var bodyShower6 = {
    id: 4444406,
    image: "assets/img/category-bodyShower/6.jpeg",
    enTitle: "Lightening & Anty Taches All Skin Type Phyto One",
    faTitle: "پن شوینده روشن کننده و ضد لک انواع پوست فیتو وان",
    price: 85000,
    discountPercent: 20
}
var bodyShower7 = {
    id: 4444407,
    image: "assets/img/category-bodyShower/7.jpeg",
    enTitle: "Extra Mild Soap Free Cleansing Dry And Sensitive Skin MEDIPAIN",
    faTitle: "پن درماتولوژیک و شفاف کننده پوست خشک و حساس مدیپن",
    price: 114000,
    discountPercent: 20
}
var bodyShower8 = {
    id: 4444408,
    image: "assets/img/category-bodyShower/8.jpeg",
    enTitle: "Extra Mild Soap Free Cleansing Dry And Normal Skin Cream MEDIPAIN",
    faTitle: "پن درماتولوژیک کرم دار پوست معمولی،خشک و خیلی خشک مدیپن",
    price: 114000,
    discountPercent: 20
}
var bodyShower9 = {
    id: 4444409,
    image: "assets/img/category-bodyShower/9.jpeg",
    enTitle: "Hair & Body Wash Relaxing HYDRODERM",
    faTitle: "شامپو سر و بدن و اصلاح صورت، آرامش بخش هیدرودرم",
    price: 69000,
    discountPercent: 20
}
var bodyShower10 = {
    id: 44444010,
    image: "assets/img/category-bodyShower/10.jpeg",
    enTitle: "Hydrating Foam Cleanser Oily Skin MEDILANN",
    faTitle: "فوم شستشوی صورت و بدن پوست چرب و مختلط مدیلن",
    price: 167000,
    discountPercent: 20
}
var bodyShower11 = {
    id: 44444011,
    image: "assets/img/category-bodyShower/11.jpeg",
    enTitle: "BODY CARE milk and honey CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه شیر و عسل هیدرودرم",
    price: 79400,
    discountPercent: 20
}
var bodyShower12 = {
    id: 44444012,
    image: "assets/img/category-bodyShower/12.jpeg",
    enTitle: "BODY CARE jasmine and argan CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه یاس و آرگان هیدرودرم",
    price: 79400,
    discountPercent: 20
}
var bodyShower13 = {
    id: 44444013,
    image: "assets/img/category-bodyShower/13.jpeg",
    enTitle: "BODY CARE white silk CREAMY SHOWER GEL HYDRODERM",
    faTitle: "شامپو بدن کرمی با رایحه ابریشم سفید هیدرودرم",
    price: 79400,
    discountPercent: 20
}
var bodyShower14 = {
    id: 44444014,
    image: "assets/img/category-bodyShower/14.jpeg",
    enTitle: "Nourishing Coconut Milk Creamy Body Shampoo SCHON",
    faTitle: "شامپو بدن کرمی مغذی شیر و نارگیل شون",
    price: 80600,
    discountPercent: 15
}
var bodyShower15 = {
    id: 44444015,
    image: "assets/img/category-bodyShower/15.jpeg",
    enTitle: "lavender relaxing body wash SCHON",
    faTitle: "شامپو بدن اسطوخدوس شون",
    price: 71800,
    discountPercent: 15
}
Products.push(bodyShower1);
Products.push(bodyShower2);
Products.push(bodyShower3);
Products.push(bodyShower4);
Products.push(bodyShower5);
Products.push(bodyShower6);
Products.push(bodyShower7);
Products.push(bodyShower8);
Products.push(bodyShower9);
Products.push(bodyShower10);
Products.push(bodyShower11);
Products.push(bodyShower12);
Products.push(bodyShower13);
Products.push(bodyShower14);
Products.push(bodyShower15);

$(document).ready(function () {


    var strBasket = localStorage.getItem("basket");
    if (strBasket) {
        basket = JSON.parse(strBasket);
        initialBakset();
    }

    $(document).on("click", ".suggest-product-add-to-basket-btn", function (e) {

        debugger;
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".suggest-product-test").data("id");
        var basketItem;
        itemFinded = false;
        if (basket && basket.length > 0) {
            basketItem = basket.find(x => x.id == id);
            if (basketItem) {
                itemFinded = true;
                basketItem.count = basketItem.count + 1;
                $('#basket-add-product-modal').modal('show');
                setTimeout(function () { $('#basket-add-product-modal').modal('hide'); }, 900);
            }
        }
        if (!itemFinded) {
            var currentProduct = Products.find(x => x.id == id);
            basketItem = {
                id: currentProduct.id,
                faTitle: currentProduct.faTitle,
                enTitle: currentProduct.enTitle,
                model: currentProduct.category,
                price: currentProduct.price,
                image: currentProduct.image,
                discount: currentProduct.discountPercent,
                totalPrice: currentProduct.price - (currentProduct.price * currentProduct.discountPercent / 100),
                count: 1
            }
            basket.push(basketItem);
            $('#basket-add-product-modal').modal('show');
            setTimeout(function () { $('#basket-add-product-modal').modal('hide'); }, 900);
        }
        initialBakset();

    });
    $(document).on("click", ".basket-inner-product-test-count-increase", function (e) {
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".basket-inner-product-test").data("id");
        ezafeKon(id);
    });
    $(document).on("click", ".basket-inner-product-test-count-decrease", function (e) {
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".basket-inner-product-test").data("id");
        dec(id);
    });

    $(".second-body").html("");
    debugger;
    for (var item of Products) {
        var html = '<div class="suggest-product-test" data-id=' + item.id + '>';
        html += '<div class="suggest-product-img">';
        html += '<img class="suggest-product-image" src="' + item.image + '"';
        html += 'title="' + item.faTitle + '"';
        html += 'alt="' + item.enTitle + '">';
        html += '</div>';
        html += '<div class="suggest-product-description">';
        html += '<div class="suggest-product-title">';
        html += '<span>' + item.faTitle + '</span>';
        html += '</div>';
        html += '<div class="suggest-product-price">';
        html += '<del>' + item.price + 'تومان</del>';
        html += '<span>' + (item.price - (item.discountPercent * item.price / 100)) + ' تومان</span>';
        html += '</div>';
        html += '</div>';
        html += '<div class="suggest-product-buttons">';
        html += '<div class="suggest-product-btns">';
        html += '<button class="suggest-product-add-to-basket-btn"><span class="material-symbols-outlined">shopping_bag</span></button>';
        html += '<button class="suggest-product-info-btn"><span class="material-symbols-outlined">info</span></button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        $(".second-body").append(html);
    }

    function ezafeKon(id) {

        var basketItem = basket.find(x => x.id == id);
        basketItem.count = basketItem.count + 1;
        initialBakset();
    }
    function dec(id) {

        var basketItem = basket.find(x => x.id == id);
        var prdctTitle = basketItem.faTitle;
        if (basketItem) {
            if (basketItem.count <= 1) {
                var index = basket.indexOf(basketItem)
                basket.splice(index, 1)
                var itemRemoved = true;

                if (itemRemoved) {
                    $(".remove-from-basket-alert").removeClass("visually-hidden");
                    $(".remove-from-basket-alert").html('<span>"' + prdctTitle + '" از سبد خرید شما حذف شد!</span>')
                    setTimeout(function () {

                        $(".remove-from-basket-alert").addClass("visually-hidden");
                    }, 1000);
                }

            } else {
                basketItem.count = basketItem.count - 1;
            }
        }
        initialBakset();
    }

    function initialBakset() {
        debugger;
        //خالی کردن داخل سبد خرید در html
        $(".basket-inner-products-list").html("");
        //چرخیدن داخل آرایه سبد خرید

        localStorage.setItem("basket", JSON.stringify(basket));

        for (var item of basket) {
            //صدا کردن تابع زیر
            addBasketItemFromHtml(item);
        }
        var totalCount = 0;
        var totalPrice = 0;
        var totalDiscount = 0;
        for (var item of basket) {
            totalPrice += item.count * item.totalPrice;
            totalCount += item.count;
            totalDiscount = totalDiscount + (item.price * item.discount / 100) * item.count;
        }
        $("#totalPrice").html(totalPrice);
        $("#totalCount").html(totalCount);
        $("#totalDiscount").html(totalDiscount);
        $("#basket-badge").html(totalCount);
    }

    function addBasketItemFromHtml(basketItem) {
        //تشکیل المنت های مربوط به باکس یک آیتم سبد خرید

        var html = '<div class="basket-inner-product-test" data-id="' + basketItem.id + '">';
        html += '<div class="basket-inner-product-test-image">';
        html += '<img class="basket-inner-product-test-img" src="' + basketItem.image + '" title="' + basketItem.faTitle + '" alt="' + basketItem.faTitle + '">';
        html += '</div>';
        html += '<div class="basket-inner-product-test-description">';
        html += '<div class="basket-inner-product-test-description-title"><span>' + summeryString(basketItem.faTitle, 25) + '</span></div>';
        html += '<div class="basket-inner-product-test-description-price"><span>' + basketItem.totalPrice + '</span></div>';
        html += '</div>';
        html += '<div class="basket-inner-product-test-count">';
        html += '<bottun class="basket-inner-product-test-count-increase"><span>+</span></bottun>';
        html += '<input class="counter-input" value="' + basketItem.count + '" disabled="disabled">';
        html += '<bottun class="basket-inner-product-test-count-decrease"><span>-</span></bottun>';
        html += '</div>';
        html += '</div>';
        $(".basket-inner-products-list").append(html)

    }
    function summeryString(str, lng) {
        let finalStr = "";
        const currentLng = str.length;
        if (currentLng > lng) {
            finalStr += str.substr(0, lng) + "..";
        } else {
            finalStr = str;
        }
        return finalStr;
    }

    $(document).on("click", ".suggest-product-info-btn", function (e) {
        debugger;
        e.preventDefault();
        var btn = this;
        var id = $(btn).closest(".suggest-product-test").data("id");
        for (var modalItem of Products) {
            modalItem = Products.find(x => x.id == id);
            var html = '<div class="modal fade info-modal" id="infoModal" tabindex="-1" data-id=" ' + modalItem.id + ' " aria-labelledby="exampleModalLabel" aria-hidden="true">';
            html += '<div class="modal-dialog">';
            html += '<div class="modal-content">';
            html += '<div class="modal-header">';
            html += '<h5 class="modal-title" id="exampleModalLabel"> ' + modalItem.faTitle + '</h5>';
            html += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>';
            html += '<div class="modal-body info-modal-body">';
            html += '<div class="product-info-modal">';
            html += '<div class="product-info-img-modal">';
            html += '<img class="product-info-image-modal" src="' + modalItem.image + '" alt="#" title="#"></div>';
            html += '<div class="product-info-fatitle-modal">';
            html += '<span class="product-info-title-farsi-modal"></span></div>';
            html += '<div class="product-info-entitle-modal">';
            html += '<span class="product-info-title-english-modal">' + modalItem.enTitle + '</span></div>';
            html += '<div class="product-info-des-modal">';
            html += '<span class="product-info-description-modal">توضیحات محصول: </span></div>';
            html += '<div class="product-info-price-modal">';
            html += '<del class="product-info-old-price-modal">' + (modalItem.price - (modalItem.discountPercent * modalItem.price / 100)) + '</del>';
            html += '<span class="product-info-new-price-modal">' + modalItem.price + '</span>';
            html += '</div></div></div>';
            html += '<div class="modal-footer info-modal-btns">';
            html += '<button type="button" class="btn" data-bs-dismiss="modal">Close</button>';
            html += '<button type="button" class="btn">Save changes</button>';
            html += '</div></div></div></div>';

            $(".info-modal").append(html);
            $('#infoModal').modal('show');
        }
    });
    // $("#searchBtn").click(function () {
    //     let searchValue = $("#searchInput").val();
    //     if (searchValue && searchValue.length > 0) {
    //         let findedProduct = Products.filter(x => x.faTitle.includes(searchValue));
    //         if (findedProduct) {
    //         } else {
    //             alert("محصولی با این مشخصات پیدا نشد:(")
    //         }
    //     }
    // })
    $("#searchInput").on("input", function () {
        let searchValue = $("#searchInput").val();
        if (searchValue && searchValue.length > 0) {
            debugger;
            let findedProduct = Products.filter(x => x.faTitle.includes(searchValue));
            $(".search-results-box").removeClass("visually-hidden");
            if (findedProduct && findedProduct.length > 0) {
                $(".search-results-box").html("")
                for (const item of findedProduct) {
                    let html = '<div class="serch-result-test">';
                    html += '<a class="search-result-link" href="#" style="text-decoration:none">';
                    html += '<img class="search-result-img" src=" ' + item.image + ' "';
                    html += 'title="" alt="">';
                    html += '<div class="search-result-info">';
                    html += '<span class="search-result-title row">' + item.faTitle + '</span>';
                    html += '<span class="search-result-price row">' + (item.price - (item.price * item.discountPercent / 100)) + 'تومان</span>';
                    html += '</div>';
                    html += '</a>';
                    html += '</div>';

                    $(".search-results-box").append(html)
                }
            }
            else {
                $(".search-results-box").html('<div style="padding:10px;font-size:16px;text-align:center;"><strong> محصولی پیدا نشد :( </strong></div>')
            }
        } else {
            $(".search-results-box").addClass("visually-hidden");
        }
    })
    $("#searchBtn").click(function () {
        let searchValue = $("#searchInput").val();
        if (searchValue && searchValue.length > 0) {
            debugger;
            let findedProduct = Products.filter(x => x.faTitle.includes(searchValue));
            $(".search-results-box").addClass("visually-hidden");
            if (findedProduct && findedProduct.length > 0) {
                $(".second-body").html("")
                for (const item of findedProduct) {
                    var shtml = '<div class="suggest-product-test" data-id=' + item.id + '>';
                    shtml += '<div class="suggest-product-img">';
                    shtml += '<img class="suggest-product-image" src="' + item.image + '"';
                    shtml += 'title="' + item.faTitle + '"';
                    shtml += 'alt="' + item.enTitle + '">';
                    shtml += '</div>';
                    shtml += '<div class="suggest-product-description">';
                    shtml += '<div class="suggest-product-title">';
                    shtml += '<span>' + item.faTitle + '</span>';
                    shtml += '</div>';
                    shtml += '<div class="suggest-product-price">';
                    shtml += '<del>' + item.price + 'تومان</del>';
                    shtml += '<span>' + (item.price - (item.discountPercent * item.price / 100)) + ' تومان</span>';
                    shtml += '</div>';
                    shtml += '</div>';
                    shtml += '<div class="suggest-product-buttons">';
                    shtml += '<div class="suggest-product-btns">';
                    shtml += '<button class="suggest-product-add-to-basket-btn"><span class="material-symbols-outlined">shopping_bag</span></button>';
                    shtml += '<button class="suggest-product-info-btn"><span class="material-symbols-outlined">info</span></button>';
                    shtml += '</div>';
                    shtml += '</div>';
                    shtml += '</div>';
                    $(".second-body").append(shtml);
                }
            }
            else {
                $(".second-body").html("هیچ محصولی پیدا نشد")
            }
        } else {

            $(".second-body").html("")
            for (const item of Products) {
                var shtml = '<div class="suggest-product-test" data-id=' + item.id + '>';
                shtml += '<div class="suggest-product-img">';
                shtml += '<img class="suggest-product-image" src="' + item.image + '"';
                shtml += 'title="' + item.faTitle + '"';
                shtml += 'alt="' + item.enTitle + '">';
                shtml += '</div>';
                shtml += '<div class="suggest-product-description">';
                shtml += '<div class="suggest-product-title">';
                shtml += '<span>' + item.faTitle + '</span>';
                shtml += '</div>';
                shtml += '<div class="suggest-product-price">';
                shtml += '<del>' + item.price + 'تومان</del>';
                shtml += '<span>' + (item.price - (item.discountPercent * item.price / 100)) + ' تومان</span>';
                shtml += '</div>';
                shtml += '</div>';
                shtml += '<div class="suggest-product-buttons">';
                shtml += '<div class="suggest-product-btns">';
                shtml += '<button class="suggest-product-add-to-basket-btn"><span class="material-symbols-outlined">shopping_bag</span></button>';
                shtml += '<button class="suggest-product-info-btn"><span class="material-symbols-outlined">info</span></button>';
                shtml += '</div>';
                shtml += '</div>';
                shtml += '</div>';
                $(".second-body").append(shtml);
            }
        }
    })

});

