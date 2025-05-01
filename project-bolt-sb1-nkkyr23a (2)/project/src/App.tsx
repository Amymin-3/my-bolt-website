import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, PenTool as Tool, ThumbsUp, ArrowRight } from 'lucide-react';

// 服務項目資料
const services = [
  { title: '水電工程', icon: '💧', description: '專業水電維修與安裝服務' },
  { title: '家庭維修', icon: '🏠', description: '全方位居家修繕服務' },
  { title: '鐵捲門維修', icon: '🚪', description: '鐵捲門故障排除與保養' },
  { title: '鐵皮屋頂維修', icon: '🏗️', description: '屋頂防水與修復服務' },
  { title: '油漆服務', icon: '🎨', description: '室內外油漆翻新服務' },
  { title: '籃板維修', icon: '🏀', description: '學校體育設施維護' },
  { title: '沙坑維修', icon: '⛱️', description: '遊樂設施安全維護' }
];

// 公司優勢資料
const advantages = [
  { icon: <Clock size={32} />, title: '30年經驗', description: '累積三十年專業維修經驗' },
  { icon: <Shield size={32} />, title: '品質保證', description: '嚴格把關每項維修品質' },
  { icon: <Tool size={32} />, title: '專業團隊', description: '擁有專業技術團隊' },
  { icon: <ThumbsUp size={32} />, title: '價格透明', description: '合理透明的維修價格' }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 頂部橫幅 */}
      <div className="bg-yellow-500 text-white py-2 px-4 text-center">
        <p className="text-sm">📞 24小時緊急維修專線：(02) XXXX-XXXX</p>
      </div>

      {/* 主視覺區域 */}
      <header className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6">黃爸維修公司</h1>
          <p className="text-2xl mb-8">您的維修需求，我們的專業堅持</p>
          <a 
            href="#contact" 
            className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            立即預約
          </a>
        </div>
      </header>

      {/* 服務項目區域 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">我們的專業服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 公司優勢區域 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">為何選擇黃爸維修？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="text-yellow-500 mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡資訊區域 */}
      <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">立即聯繫我們</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone size={32} className="text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">電話聯繫</h3>
              <p>(02) XXXX-XXXX</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail size={32} className="text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">電子郵件</h3>
              <p>service@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={32} className="text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">服務地區</h3>
              <p>大台北地區</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a 
              href="#" 
              className="inline-flex items-center bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              加入LINE官方帳號 <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 黃爸維修公司. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;