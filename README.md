# Wask Frontend Case

Bu proje, iş başvurusu için geliştirilen bir case projesidir. Bu README dosyası, projenin genel yapısını, kullanılan teknolojiler ve projeyi çalıştırma adımlarını içerir.

## Kullanılan Teknolojiler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- Vue3(composition api)
- Vuex
- Vue-router
- Axios
- Slider
- Apexcharts
- Vite (Bunun üzerine kurulu bazı yardımcı araçlar)
- Tailwind CSS

# Projeyi Nasıl Geliştirdim

Bu proje, Vue3 Composition api kullanılarak geliştirilmiştir. Aşağıda projenin geliştirilme sürecinde kullanılan yöntemler ve teknolojiler hakkında detaylı bilgiler bulunmaktadır:

- Proje Vue3 Compositon api ile geliştirildi.
- Projeyi tekrar olçeklenebilir hale getirdim. Layout sistemini entegre ettim. Mimari değiştirmeden büyütülebilir ve esnek bir yapıya sahip. Farklı modallar, bileşenler vb. esnek bir şekilde entegre edilebilir ve tekrar kullanılabilir.
- Veri alışverişi işlemleri için Vuex getter, props'lar ve emitler kullanıldı.
- Vuex yapısını moduler olarak kurdum. boylelikle olceklenebilir olarak bir başkası kodun uzerinden rahatlıkla devam edebilir. 
- Servis istekleri bir base_url ile services klasorunden interceptors ile atılıyor.
- İstekler için Axios kütüphanesi kullanıldı.
- API anahtarı ve base URL için .env dosyası kuruldu ve kullanıldı.
- Animasyonlar, geçişler ve tüm stil işlemleri Tailwind CSS ile yapıldı.
- aynı zamanda apexcharts ile animasyonlar kuvvetlendi.
- Projenin tamamı Tailwind CSS ile yazıldı. sadece tek bir bolumde custom css yazılmak durumunda kalındı. Zaman kazanmak amacıyla bu tercih yapıldı.
-son olarak mobil'e uygun tasarlanmadı bu yuzden min 1280 px cihazlarda calistiriniz.

- proje linki aşağıdadır.

- https://master--deft-basbousa-c617a9.netlify.app/


## Nasıl Çalıştırılır?

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Öncelikle, projeyi klonlayın veya zip olarak indirin:

```bash
git clone <proje-git-url>

npm install

npm run dev
```
