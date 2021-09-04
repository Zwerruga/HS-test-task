import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const generalBoardNavTree = [
  {
    key: "general",
    path: `${APP_PREFIX_PATH}/general`,
    title: "sidenav.general",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "dashboard",
        path: `${APP_PREFIX_PATH}/general/dashboard`,
        title: "sidenav.general.dashboard",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "ecommerce",
        path: `${APP_PREFIX_PATH}/general/ecommerce`,
        title: "sidenav.general.ecommerce",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "product",
            path: `${APP_PREFIX_PATH}/general/ecommerce/product`,
            title: "sidenav.general.ecommerce.product",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "category",
            path: `${APP_PREFIX_PATH}/general/ecommerce/category`,
            title: "sidenav.general.ecommerce.category",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "collection",
            path: `${APP_PREFIX_PATH}/general/ecommerce/collection`,
            title: "sidenav.general.ecommerce.collection",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "combo",
            path: `${APP_PREFIX_PATH}/general/ecommerce/combo`,
            title: "sidenav.general.ecommerce.combo",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/general/orders`,
        title: "sidenav.general.ecommerce.orders",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/general/clients`,
        title: "sidenav.general.clients",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "clientlist",
            path: `${APP_PREFIX_PATH}/general/clients/clientlist`,
            title: "sidenav.general.clients.clientlist",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "clientgroups",
            path: `${APP_PREFIX_PATH}/general/clients/clientgroups`,
            title: "sidenav.general.clients.clientgroups",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/general/banners`,
        title: "sidenav.general.banners",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "promo",
        path: `${APP_PREFIX_PATH}/general/promo`,
        title: "sidenav.general.promo",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "offlinestores",
        path: `${APP_PREFIX_PATH}/general/offlinestores`,
        title: "sidenav.general.offlinestores",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "addresses",
            path: `${APP_PREFIX_PATH}/general/offlinestores/addresses`,
            title: "sidenav.general.offlinestores.addresses",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "geozones",
            path: `${APP_PREFIX_PATH}/general/offlinestores/geozones`,
            title: "sidenav.general.offlinestores.geozones",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      }, {
        key: "employees",
        path: `${APP_PREFIX_PATH}/general/employees`,
        title: "sidenav.general.employees",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      }, {
        key: "mailings",
        path: `${APP_PREFIX_PATH}/general/mailings`,
        title: "sidenav.general.mailings",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemBoardNavTree = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/system`,
    title: "sidenav.system",
    icon: "",
    breadcrumb: false,
    submenu: [{
      key: "settings",
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: "sidenav.system.settings",
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: [],
    }, {
      key: "mobileapp",
      path: `${APP_PREFIX_PATH}/system/mobileapp`,
      title: "sidenav.system.mobileapp",
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: [],
    }, {
      key: "logs",
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: "sidenav.system.logs",
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: [],
    },],
  },
];

const navigationConfig = [
  ...generalBoardNavTree,
  ...systemBoardNavTree
]

export default navigationConfig;
