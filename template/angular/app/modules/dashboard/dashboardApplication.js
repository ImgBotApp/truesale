
var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate','ngMaterial']);


dashboard.config(["$stateProvider", function ($stateProvider) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/home2.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    $stateProvider.state('app.widgets', {
        url: '/widgets',
        templateUrl: 'app/modules/dashboard/views/widgets.html',
        controller: 'WidgetsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Widgets'
        }
    });

    $stateProvider.state('app.dashboard_v2', {
        url: '/dashboard-v2',
        templateUrl: 'app/modules/dashboard/views/index-2.html',
        controller: 'HomeTwoController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    $stateProvider.state('app.dashboard_v3', {
        url: '/dashboard-v3',
        templateUrl: 'app/modules/dashboard/views/index-4.html',
        controller: 'HomeFourController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    $stateProvider.state('app.dashboard_v4', {
        url: '/dashboard-v4',
        templateUrl: 'app/modules/dashboard/views/index-4.html',
        controller: 'HomeFourController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    $stateProvider.state('app.dashboard_v5', {
        url: '/dashboard-v5',
        templateUrl: 'app/modules/dashboard/views/index-5.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    $stateProvider.state('app.dashboard_v6', {
        url: '/dashboard-v6',
        templateUrl: 'app/modules/dashboard/views/index-6.html',
        controller: 'HomeSixController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    //mail detail page state
    $stateProvider.state('app.mail_detail', {
        url: '/mail_detail',
        templateUrl: 'app/modules/dashboard/views/mail_detail.html',
        //controller: 'SkillController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Mail detail'
        }
    });

    //mail compose page state
    $stateProvider.state('app.mail_compose', {
        url: '/mail_compose',
        templateUrl: 'app/modules/dashboard/views/mail_compose.html',
        controller: 'MailComposeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Mail compose'
        }
    });

    //flow charts page state
    $stateProvider.state('app.flot_charts', {
        url: '/flot_charts',
        templateUrl: 'app/modules/dashboard/views/flot_charts.html',
        //controllerUrl: 'app/modules/dashboard/controllers/flot_charts.js',
        controller: 'FlotChartController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Flot Charts'
        }
    });


    //morris_js page state
    $stateProvider.state('app.morris_js', {
        url: '/morris_js',
        templateUrl: 'app/modules/dashboard/views/morris_js.html',
        controller: 'MorrisController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Morris JS'
        }
    });

    //chart_js page state
    $stateProvider.state('app.chart_js', {
        url: '/chart_js',
        templateUrl: 'app/modules/dashboard/views/chart_js.html',
        controller: 'ChartController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Chart JS'
        }
    });

    //chartist page state
    $stateProvider.state('app.c3', {
        url: '/c3',
        templateUrl: 'app/modules/dashboard/views/c3.html',
       controller: 'C3Controller',
        controllerAs: 'vm',
        data: {
            pageTitle: 'C3'
        }
    });


    // chart_pie page state
    $stateProvider.state('app.pie_charts', {
        url: '/pie_charts',
        templateUrl: 'app/modules/dashboard/views/pie_chart.html',
        controller: 'PieChartsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Pie Charts'
        }
    });

    //About Me page state
    $stateProvider.state('app.about', {
        url: '/about-me',
        templateUrl: 'app/modules/dashboard/views/about.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'About Me'
        }
    });

    //form_basic page state
    $stateProvider.state('app.form_basic', {
        url: '/form_basic',
        templateUrl: 'app/modules/dashboard/views/form_basic.html',
        controller: 'FormBasicController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form Basic'
        }
    });
    $stateProvider.state('app.form_advanced', {
        url: '/form_advanced',
        templateUrl: 'app/modules/dashboard/views/form_advanced.html',
        //controller: 'FormAdvancedController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form Advanced'
        }
    });


    //form_wizard page state
    $stateProvider.state('app.form_wizard', {
        url: '/form_wizard',
        templateUrl: 'app/modules/dashboard/views/form_wizard.html',
        controller: 'FormWizardController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form Wizard'
        }
    });

    //form_masked page state
    $stateProvider.state('app.form_masked', {
        url: '/form_masked',
        templateUrl: 'app/modules/dashboard/views/form_masked.html',
        controller: 'FormMaskedController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form Masked'
        }
    });

    //form_file_upload page state
    $stateProvider.state('app.form_file_upload', {
        url: '/form_file_upload',
        templateUrl: 'app/modules/dashboard/views/form_file_upload.html',
        controller: 'FileUploadController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form File Upload'
        }
    });

    //Mailbox page state
    $stateProvider.state('app.mailbox', {
        url: '/mailbox',
        templateUrl: 'app/modules/dashboard/views/mailbox.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'mailbox'
        }
    });

    //form_text_editor page state
    $stateProvider.state('app.form_text_editor', {
        url: '/form_text_editor',
        templateUrl: 'app/modules/dashboard/views/form_text_editor.html',
        controller: 'FormTextEditorController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form TextEditor'
        }
    });


    //form_inline_edit page state
    $stateProvider.state('app.form_inline_edit', {
        url: '/form_inline_edit',
        templateUrl: 'app/modules/dashboard/views/form_inline_edit.html',
        controller: 'FormInlineEditController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form Inline Edit'
        }
    });

    $stateProvider.state('app.file_drop', {
        url: '/file_drop',
        templateUrl: 'app/modules/dashboard/views/file_drop.html',
        controller: 'FileDropController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'File Dropzone'
        }
    });

    $stateProvider.state('app.form_validate', {
        url: '/form_validate',
        templateUrl: 'app/modules/dashboard/views/form_validate.html',
        controller: 'FormValidateController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Form Validation'
        }
    });

    $stateProvider.state('app.form_tinymce', {
        url: '/form_tinymce',
        templateUrl: 'app/modules/dashboard/views/form_tinymce.html',
        controller: 'FormTinymceEditController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Tinymce Editor'
        }
    });

    $stateProvider.state('app.form_wysihtml5', {
        url: '/form_wysihtml5',
        templateUrl: 'app/modules/dashboard/views/form_wysihtml5.html',
        controller: 'FormwysihtmlController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'WYSIHTML5 Editor'
        }
    });
    //lockscreen page state
    $stateProvider.state('app.lockscreen', {
        url: '/lockscreen',
        templateUrl: 'app/modules/dashboard/views/lockscreen.html',
        //controller: 'LockscreenController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Lockscreen',
            cssClassnames: 'lockscreen'
        }
    });

    //login page state
    $stateProvider.state('app.login', {
        url: '/login',
        templateUrl: 'app/modules/dashboard/views/login.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Login',
            cssClassnames: 'account'
        }
    });

    //register page state
    $stateProvider.state('app.register', {
        url: '/register',
        templateUrl: 'app/modules/dashboard/views/register.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Register',
            cssClassnames: 'account'
        }
    });

    //404 page state
    $stateProvider.state('app.404', {
        url: '/404',
        templateUrl: 'app/modules/dashboard/views/404.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: '404',
            cssClassnames: 'error'
        }
    });

    //empty_page page state
    $stateProvider.state('app.empty_page', {
        url: '/empty_page',
        templateUrl: 'app/modules/dashboard/views/empty_page.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Empty Page'
        }
    });

    //gallery page state
    $stateProvider.state('app.gallery', {
        url: '/gallery',
        templateUrl: 'app/modules/dashboard/views/gallery.html',
        controller: 'GalleryController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Gallery'
        }
    });

    //price_tables page state
    $stateProvider.state('app.price_tables', {
        url: '/price_tables',
        templateUrl: 'app/modules/dashboard/views/price_tables.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Price Tables'
        }
    });

    //page_contact page state
    $stateProvider.state('app.page_contact', {
        url: '/page_contact',
        templateUrl: 'app/modules/dashboard/views/page_contact.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Page Contact'
        }
    });

    //orders page state
    $stateProvider.state('app.order-detail', {
        url: '/order-detail',
        templateUrl: 'app/modules/dashboard/views/order-detail.html',
        //controller: 'OrdersController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Orders Detail'
        }
    });

    //orders page state
    $stateProvider.state('app.orders', {
        url: '/orders',
        templateUrl: 'app/modules/dashboard/views/orders.html',
        //controller: 'OrdersController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Orders'
        }
    });

    //order-view page state
    $stateProvider.state('app.order-invoice', {
        url: '/order-view',
        templateUrl: 'app/modules/dashboard/views/order-invoice.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Order Invoice'
        }
    });

    //products page state
    $stateProvider.state('app.products', {
        url: '/products',
        templateUrl: 'app/modules/dashboard/views/products.html',
        controller: 'ProductsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Products'
        }
    });

    //typography page state
    $stateProvider.state('app.typography', {
        url: '/typography',
        templateUrl: 'app/modules/dashboard/views/typography.html',
        controller: 'TypographyController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Typography'
        }
    });

    //icons page state
    $stateProvider.state('app.icons', {
        url: '/icons',
        templateUrl: 'app/modules/dashboard/views/icons.html',
        controller: 'IconsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Icons'
        }
    });

    //buttons page state
    $stateProvider.state('app.buttons', {
        url: '/buttons',
        templateUrl: 'app/modules/dashboard/views/buttons.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Buttons'
        }
    });

    //video page state
    $stateProvider.state('app.video', {
        url: '/video',
        templateUrl: 'app/modules/dashboard/views/video.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Video'
        }
    });

    //tabs_panels page state
    $stateProvider.state('app.tabs_panels', {
        url: '/tabs_panels',
        templateUrl: 'app/modules/dashboard/views/tabs_panels.html',
        controller: 'TabPanelsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Tabs Panels'
        }
    });

    //tabs page state
    $stateProvider.state('app.tabs', {
        url: '/tabs',
        templateUrl: 'app/modules/dashboard/views/tabs.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Tabs'
        }
    });
    //chat page state
    $stateProvider.state('app.chat', {
        url: '/chat',
        templateUrl: 'app/modules/dashboard/views/chat.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Chat'
        }
    });

    //alert_notifications page state
    $stateProvider.state('app.alert_notifications', {
        url: '/alert_notifications',
        templateUrl: 'app/modules/dashboard/views/alert_notifications.html',
        controller: 'AlertController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Alert Notifications'
        }
    });

    //grid_options page state
    $stateProvider.state('app.grid_options', {
        url: '/grid_options',
        templateUrl: 'app/modules/dashboard/views/grid_options.html',
        controller: 'GridOptionsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Grid Options'
        }
    });

    //table_basic page state
    $stateProvider.state('app.table_basic', {
        url: '/table_basic',
        templateUrl: 'app/modules/dashboard/views/table_basic.html',
        controller: 'TableBasicController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Table Basic'
        }
    });

    //table_data_tables page state
    $stateProvider.state('app.table_data_tables', {
        url: '/table_data_tables',
        templateUrl: 'app/modules/dashboard/views/table_data_tables.html',
        controller: 'DataTablesController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Table Data Tables'
        }
    });

    $stateProvider.state('app.table_responsive', {
        url: '/table_responsive',
        templateUrl: 'app/modules/dashboard/views/table_responsive.html',
        controller: 'TableResponsiveController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Responsive Tables'
        }
    });

    $stateProvider.state('app.table_editable', {
        url: '/table_editable',
        templateUrl: 'app/modules/dashboard/views/table_editable.html',
        controller: 'TableEditableController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Editable Tables'
        }
    });

    $stateProvider.state('app.table_jsgrid', {
        url: '/table_jsgrid',
        templateUrl: 'app/modules/dashboard/views/table_jsgrid.html',
        controller: 'TableJSGridController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'JSGrid Tables'
        }
    });
    //user_profile page state
    $stateProvider.state('app.user_profile', {
        url: '/user_profile',
        templateUrl: 'app/modules/dashboard/views/user_profile.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'User Profile'
        }
    });

    //user_list page state
    $stateProvider.state('app.user_list', {
        url: '/user_list',
        templateUrl: 'app/modules/dashboard/views/user_list.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'User List'
        }
    });

    //google_maps page state
    $stateProvider.state('app.google_maps', {
        url: '/google_maps',
        templateUrl: 'app/modules/dashboard/views/google_maps.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Google Maps'
        }
    });

    //vector_maps page state
    $stateProvider.state('app.vector_maps', {
        url: '/vector_maps',
        templateUrl: 'app/modules/dashboard/views/vector_maps.html',
        controller: 'VectorMapsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Vector Maps'
        }
    });

    //blog_list page state
    $stateProvider.state('app.blog_list', {
        url: '/blog_list',
        templateUrl: 'app/modules/dashboard/views/blog_list.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Blog List'
        }
    });

    //blog_post page state
    $stateProvider.state('app.blog_post', {
        url: '/blog_post',
        templateUrl: 'app/modules/dashboard/views/blog_post.html',
        //controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Blog Post'
        }
    });

    //calendar page state
    $stateProvider.state('app.calendar', {
        url: '/calendar',
        templateUrl: 'app/modules/dashboard/views/calendar.html',
        controller: 'CalendarController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Calendar'
        }
    });

    // weather-icon state
    $stateProvider.state('app.weather-icon', {
        url: '/weather-icon',
        templateUrl: 'app/modules/dashboard/views/weather-icon.html',
        controller: 'WeatherIconController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'weather-icon'
        }
    });

    $stateProvider.state('app.themifyicons', {
        url: '/themifyicons',
        templateUrl: 'app/modules/dashboard/views/themifyicons.html',
        controller: 'ThemifyIconsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Themify Icons'
        }
    });

    $stateProvider.state('app.linea_arrows', {
        url: '/linea_arrows',
        templateUrl: 'app/modules/dashboard/views/linea_arrows.html',
        controller: 'LineaArrowsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Linea Arrows'
        }
    });

    $stateProvider.state('app.linea_basic', {
        url: '/linea_basic',
        templateUrl: 'app/modules/dashboard/views/linea_basic.html',
        controller: 'LineaBasicController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Linea Basic'
        }
    });
    $stateProvider.state('app.linea_elaboration', {
        url: '/linea_elaboration',
        templateUrl: 'app/modules/dashboard/views/linea_elaboration.html',
        controller: 'LineaElaborationController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Linea Elaboration'
        }
    });

    $stateProvider.state('app.linea_ecommerce', {
        url: '/linea_ecommerce',
        templateUrl: 'app/modules/dashboard/views/linea_ecommerce.html',
        controller: 'LineaEcommerceController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Linea Ecommerce'
        }
    });

    $stateProvider.state('app.tree_view', {
        url: '/tree_view',
        templateUrl: 'app/modules/dashboard/views/tree_view.html',
        controller: 'TreeViewController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Tree View'
        }
    });


    $stateProvider.state('app.timeline', {
        url: '/timeline',
        templateUrl: 'app/modules/dashboard/views/timeline.html',
        //controller: 'weather-icon',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Timeline'
        }
    });


    $stateProvider.state('app.progress_bar', {
        url: '/progress_bar',
        templateUrl: 'app/modules/dashboard/views/progress_bar.html',
        controller: 'ProgressBarController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Progress Bar'
        }
    });

    $stateProvider.state('app.sliders', {
        url: '/sliders',
        templateUrl: 'app/modules/dashboard/views/sliders.html',
        //controller: 'weather-icon',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Sliders'
        }
    });

    $stateProvider.state('app.range_slider', {
        url: '/range_slider',
        templateUrl: 'app/modules/dashboard/views/range_slider.html',
        controller: 'RangeSliderController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Range Slider'
        }
    });

    $stateProvider.state('app.tooltip', {
        url: '/tooltip',
        templateUrl: 'app/modules/dashboard/views/tooltip.html',
        controller: 'TooltipController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'tooltip'
        }
    });

    $stateProvider.state('app.alert_popup', {
        url: '/alert_popup',
        templateUrl: 'app/modules/dashboard/views/alert_popup.html',
        //controller: 'weather-icon',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Alert Popup'
        }
    });

    $stateProvider.state('app.accordion', {
        url: '/accordion',
        templateUrl: 'app/modules/dashboard/views/accordion.html',
        //controller: 'weather-icon',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Accordion'
        }
    });

    $stateProvider.state('app.models', {
        url: '/models',
        templateUrl: 'app/modules/dashboard/views/models.html',
        controller: 'ModelsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Models'
        }
    });

    $stateProvider.state('app.toastr_alert', {
        url: '/toastr_alert',
        templateUrl: 'app/modules/dashboard/views/toastr_alert.html',
        //controller: 'weather-icon',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Toastr Alert'
        }
    });

}]);

