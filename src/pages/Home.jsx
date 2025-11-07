import React from 'react';
import { ArrowLeft, Star, Truck, Shield, Clock } from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'گوشی موبایل سامسونگ',
      price: '۱۲,۹۹۰,۰۰۰',
      originalPrice: '۱۵,۹۹۰,۰۰۰',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      rating: 4.5,
      discount: 19
    },
    {
      id: 2,
      name: 'لپ‌تاپ اپل مک‌بوک پرو',
      price: '۴۵,۹۹۰,۰۰۰',
      originalPrice: '۵۲,۹۹۰,۰۰۰',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
      rating: 4.8,
      discount: 13
    },
    {
      id: 3,
      name: 'هدفون بی‌سیم سونی',
      price: '۳,۹۹۰,۰۰۰',
      originalPrice: '۴,۹۹۰,۰۰۰',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      rating: 4.3,
      discount: 20
    },
    {
      id: 4,
      name: 'دوربین کانن',
      price: '۲۳,۹۹۰,۰۰۰',
      originalPrice: '۲۸,۹۹۰,۰۰۰',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
      rating: 4.7,
      discount: 15
    }
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-primary-500" />,
      title: 'تحویل سریع',
      description: 'تحویل رایگان در کمتر از ۲۴ ساعت'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-500" />,
      title: 'ضمانت اصالت',
      description: 'ضمانت بازگشت ۷ روزه کالا'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-500" />,
      title: 'پشتیبانی ۲۴/۷',
      description: 'پشتیبانی آنلین در تمام ساعات'
    }
  ];

  return (
    <div className="min-h-screen fade-in">
      {/* هیرو بخش */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              تجربه خرید آنلاین
              <span className="block text-primary-100">منحصر به فرد</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              با تتراشاپ، بهترین محصولات با بهترین قیمت را درب منزل تحویل بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
                شروع خرید
              </button>
              <button className="btn-secondary border-white text-white hover:bg-primary-400 text-lg px-8 py-3">
                مشاهده محصولات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ویژگی‌ها */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center card p-8">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* محصولات ویژه */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              محصولات ویژه
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              منتخبی از بهترین محصولات با تخفیف‌های ویژه
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      {product.discount}% تخفیف
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? 'fill-current' : ''
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 mr-2">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-lg font-bold text-gray-900">
                        {product.price} تومان
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="btn-primary w-full mt-4">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
