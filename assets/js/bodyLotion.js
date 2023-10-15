var basket = [];
var Products = [];
var lotion1 = {
    id: 3333301,
    image: "assets/img/category-lotion/1.jpeg",
    enTitle: "Moisturizing And Hydrating Body Lotion 400ml JUTE",
    faTitle: "لوسیون مرطوب کننده و آبرسان بدن اکلت ژوت",
    price: 195000,
    discountPercent: 30
}
var lotion2 = {
    id: 3333302,
    image: "assets/img/category-lotion/2.jpeg",
    enTitle: "Moisturizing And Hydrating Body Lotion 400ml JUTE",
    faTitle: "لوسیون شکلات مرطوب کننده و آبرسان بدن ژوت",
    price: 195000,
    discountPercent: 25
}
var lotion3 = {
    id: 3333303,
    image: "assets/img/category-lotion/3.jpeg",
    enTitle: "ADORE LOTINON BODY LOTION JUTE",
    faTitle: "لوسیون مرطوب کننده بدن آدور ژوت",
    price: 195000,
    discountPercent: 25
}
var lotion4 = {
    id: 3333304,
    image: "assets/img/category-lotion/4.jpeg",
    enTitle: "Baby And Kids Lotion 70ml JUTE",
    faTitle: "لوسیون مرطوب کننده کودکان ژوت",
    price: 52000,
    discountPercent: 25
}
var lotion5 = {
    id: 3333305,
    image: "assets/img/category-lotion/5.jpeg",
    enTitle: "post depilatory lotion for women IPLUS",
    faTitle: "لوسیون پس از اپیلاسیون بانوان تیوبی آی پلاس",
    price: 59700,
    discountPercent: 25
}
var lotion6 = {
    id: 3333306,
    image: "assets/img/category-lotion/6.jpeg",
    enTitle: "Mandarin Body Lotion JUTE",
    faTitle: "لوسیون ماندارین ژوت",
    price: 149500,
    discountPercent: 25
}
var lotion7 = {
    id: 3333307,
    image: "assets/img/category-lotion/7.jpeg",
    enTitle: "Moisturizing And Hydrating Body Lotion 400ml JUTE",
    faTitle: "لوسیون نارگیل مرطوب کننده و آبرسان بدن ژوت",
    price: 175000,
    discountPercent: 25
}
var lotion8 = {
    id: 3333308,
    image: "assets/img/category-lotion/8.jpeg",
    enTitle: "10 Percent Urea Moisturizing Cream For Dry Skins ARDENE",
    faTitle: "لوسیون مرطوب کننده اوره 10% آردن",
    price: 98000,
    discountPercent: 20
}
var lotion9 = {
    id: 3333309,
    image: "assets/img/category-lotion/9.jpeg",
    enTitle: "Moisturizing lotion face and body baby 200gr HYDRODERM",
    faTitle: "لوسیون مرطوب کننده صورت و بدن نوزادان شیرخوار هیدرودرم",
    price: 100000,
    discountPercent: 20
}
var lotion10 = {
    id: 33333010,
    image: "assets/img/category-lotion/10.jpeg",
    enTitle: "Body Lotion MEDILANN",
    faTitle: "لوسیون بدن مدیلن",
    price: 110000,
    discountPercent: 20
}
var lotion11 = {
    id: 33333011,
    image: "assets/img/category-lotion/11.jpeg",
    enTitle: "Mango Body lotion JABON PLUS",
    faTitle: "لوسیون بدن انبه ژبن پلاس",
    price: 235000,
    discountPercent: 20
}
var lotion12 = {
    id: 33333012,
    image: "assets/img/category-lotion/12.jpeg",
    enTitle: "Lady Body Lotion For Dry Skin 200g HYDRODERM",
    faTitle: "لوسیون بدن تیوبی لیدی پوست خشک هیدرودرم",
    price: 124500,
    discountPercent: 20
}
var lotion13 = {
    id: 3333301,
    image: "assets/img/category-lotion/13.jpeg",
    enTitle: "Moisturizing Face & Body Lotion BEAUTY SILK",
    faTitle: "لوسیون صورت و بدن کودک بیوتی سیلک",
    price: 288000,
    discountPercent: 15
}
var lotion14 = {
    id: 33333014,
    image: "assets/img/category-lotion/14.jpeg",
    enTitle: "Body Lotion 200ml DOCTOR JILA",
    faTitle: "لوسیون بدن دکتر ژیلا",
    price: 117100,
    discountPercent: 15
}
var lotion15 = {
    id: 33333015,
    image: "assets/img/category-lotion/15.jpeg",
    enTitle: "Moisturizing body lotion VERONIQUE15",
    faTitle: "لوسیون مرطوب کننده بدن ورونیک",
    price: 399800,
    discountPercent: 10
}
Products.push(lotion1);
Products.push(lotion2);
Products.push(lotion3);
Products.push(lotion4);
Products.push(lotion5);
Products.push(lotion6);
Products.push(lotion7);
Products.push(lotion8);
Products.push(lotion9);
Products.push(lotion10);
Products.push(lotion11);
Products.push(lotion12);
Products.push(lotion13);
Products.push(lotion14);
Products.push(lotion15);
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