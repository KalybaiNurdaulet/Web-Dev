export interface Product {
    id: number;
    link: string;
    name: string;
    img: string[];
    price: number;
    description: string;
    rating: number;
    currentImageIndex: number;
  }
  
  export const products = [
    {
      id: 1,
      img: ["https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h39/h6a/79480589680670.jpg?format=gallery-medium"],
      name: 'Wireless Mouse черный',
      price: 889,
      description: 'Sensor Type: Optical LED, Connection Type: Wireless (USB, Bluetooth), Interface: USB, Bluetooth, Design: Right-handed, Gaming: No, Optical Sensor Resolution: 8000.0 dpi.',
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
      rating: 0,
      currentImageIndex: 0,
    },
    {
      id: 2,
      img: ["https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/he0/h57/63760532733982.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc5/hb2/63760533192734.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hf6/ha2/63760533717022.jpg?format=gallery-medium"],
      name: 'Wi-Fi роутер TP-LINK TD-W8961NB',
      price: 14989,
      description: 'N-Series Wireless Router with integrated ADSL2+ modem and data transfer rate up to 300 Mbit/s TD model-',
      link: '',
      rating: 5,
      currentImageIndex: 0,
    },
    {
      id: 3,
      img: ["https://resources.cdn-kaspi.kz/img/m/p/pcc/pc8/20297390.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hd3/h42/86540924682270.jpg?format=gallery-medium"],
      name: 'Keychron K3 HotSwap Gateron Brown Switch ',
      price: 39990,
      description: 'Optical-m echanical keyboard with a classic design, designed for desktop computers, featuring wireless connectivity, and equipped with Gateron Brown mechanical switches.',
      link: 'https://kaspi.kz/shop/p/keychron-k3-hotswap-gateron-brown-switch-seryi-105986842/?c=750000000',
      rating: 5,
      currentImageIndex: 0,
    },
    {
      id: 4,
      img: ["https://resources.cdn-kaspi.kz/img/m/p/h08/h5f/63839171149854.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/haa/h0f/63839173509150.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h67/h6e/63839176720414.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h27/hbb/63839179866142.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hc7/hbb/63839183142942.jpg?format=gallery-medium"],
      name: 'Ibanez GRG121DX-BKF Black',
      price: 134990,
      description: 'Electric guitar with 6 strings, superstrat body shape, not specifically designed for left-handed players.',
      link: 'https://kaspi.kz/shop/p/ibanez-grg121dx-bkf-black-14200417/?c=750000000',
      rating: 5,
      currentImageIndex: 0,
    },{
      id: 5,
      img: ["https://resources.cdn-kaspi.kz/img/m/p/h4c/h48/84690345918494.jpg?format=gallery-medium"],
      name: 'REALTECH 37455530 белый',
      price: 3000000,
      description: 'Windows 11 Pro system with Intel Core i9-14900KF, 64GB RAM, 2TB SSD, NVIDIA GeForce RTX 4090, 4TB HDD, housed in a Midi-Tower case.',
      link: 'https://kaspi.kz/shop/p/realtech-37455530-belyi-115260839/?c=750000000',
      rating: 0,
      currentImageIndex: 0,
    },{
      id:6,
      img:["https://resources.cdn-kaspi.kz/img/m/p/h0a/h51/64417186480158.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h13/ha1/64417188675614.jpg?format=gallery-medium", "https://resources.cdn-kaspi.kz/img/m/p/h5e/h01/64417190739998.jpg?format=gallery-medium"],
      name:"Logitech MX Master 3S",
      price:49106,
      description:"Sensor Type: Optical LED, Connection Type: Wireless (USB, Bluetooth), Interface: USB, Bluetooth, Design: Right-handed, Gaming: No, Optical Sensor Resolution: 8000.0 dpi.",
      link:"https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006560-seryi-106172406/?c=750000000",
      rating: 5,
      currentImageIndex: 0,
    },{
      id:7,
      img:["https://resources.cdn-kaspi.kz/img/m/p/h03/h02/64026264174622.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hb3/hfa/64026265518110.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h9f/h05/64026268467230.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h0e/h71/64026270498846.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h2e/hda/64026273939486.jpg?format=gallery-medium"],
      name:"Samsung Odyssey G9 C49G95TSSI LC49G95TSSIXCI",
      price:958898,
      description:"Diagonal: 48.9 inches, Resolution: 5120x1440, LCD Matrix Type: TFT *VA, Brightness: 420.0 cd/m², Response Time: 1.0 ms, Max Refresh Rate: 240.0 Hz, Inputs: HDMI, DisplayPort.",
      link:"https://kaspi.kz/shop/p/samsung-odyssey-g9-c49g95tssi-lc49g95tssixci-chernyi-belyi-101114775/?c=750000000",
      rating: 4.5,
      currentImageIndex: 0,
    }
    ,{
      id:8,
      img:["https://resources.cdn-kaspi.kz/img/m/p/h17/h7f/64441029918750.jpg?format=gallery-medium"],
      name:"Кварцевые Seiko SSE019J1",
      price:2251300,
      description:"Time Display: Analog (hands), Type: Quartz, Case Material: Titanium, For: Men, Color: Black.",
      link:"https://kaspi.kz/shop/p/kvartsevye-seiko-sse019j1-titan-104529276/?c=750000000",
      rating: 0,
      currentImageIndex: 0,
    },{
      id:9,
      img:["https://resources.cdn-kaspi.kz/img/m/p/h81/had/86319870181406.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h3b/hd4/86319870279710.jpg?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h91/h9f/86319870378014.jpg?format=gallery-medium"],
      name:"Apple iPhone 15 Pro 1Tb",
      price:806704,
      description:"NFC Technology: Yes, Color: Blue, Screen Type: OLED, Super Retina XDR display, Diagonal: 6.1 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 1024.0 GB, Battery Capacity: 3279.0 mAh.",
      link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-sinii-113138344/?c=750000000",
      rating: 5,
      currentImageIndex: 0,
    },{
      id:10,
      img:["https://resources.cdn-kaspi.kz/img/m/p/hf5/hf5/84077662830622.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/hfe/hbf/84077662961694.png?format=gallery-medium","https://resources.cdn-kaspi.kz/img/m/p/h11/h43/84077663027230.jpg?format=gallery-medium"],
      name:"Dyson Gen5detect",
      price:576482,
      description:"Type: Vertical, Cleaning: Dry, Dust Collector Type: Container, Power Consumption: 752.0 W, Power Source: Battery, Color: Purple.",
      link:"https://kaspi.kz/shop/p/dyson-gen5detect-fioletovyi-113592857/?c=750000000",
      rating: 4.5,
      currentImageIndex: 0,
    },{
      id:11,
      img:["https://resources.cdn-kaspi.kz/img/m/p/h00/hf2/86215715848222.jpg?format=gallery-medium"],
      name:"Телевизор Xiaomi A 2025 L50MA-ARU 127 см черный",
      price:176990,
      description:"The color is black Control standard remote control Power consumption 100.0 Wall mounting option Yes Dimensions with stand 111.1 x 70.2 x 27.9 cm Weight with stand 8.1 kg Dimensions without stand 111.1 x 65 x 8.2 cm Weight without stand 8.0 kg Package contents remote control, power cable, legs",
      link: "https://kaspi.kz/shop/p/xiaomi-a-2025-l50ma-aru-127-sm-chernyi-120147296/?c=750000000",
      rating: 5,
      currentImageIndex: 0,
    }
  ];