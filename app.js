const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        aktifKullanici: {},
        showMessage : "",
        kullanicilar: [
            {
                id: 25,
                isim: 'Cem',
                rol: 'Admin'
            },
            {
                id: 32,
                isim: 'Esra',
                rol: 'Admin'
            },
            {
                id: 54,
                isim: 'Ceyda',
                rol: 'User'
            }]
    },
    methods: {
        kullaniciYeni() {
            this.aktifKullanici={ rol: '' };
            $('#kullaniciModal').modal('show');
            this.showMessage = ""

        },

        kullaniciKaydet() {

            if (this.aktifKullanici.isim != undefined && this.aktifKullanici.rol != '') {
              
                
                // Eğer id'si kullanıcılarda var ise güncelle (UI - Kullanıcı Düzenle)
                if (this.aktifKullanici.id>0){
                    let kullanici = this.kullanicilar.find(x=>x.id == this.aktifKullanici.id);
                    kullanici = this.aktifKullanici;

                } 
            
                // Eğer id'si kullanıcılarda yokse ise ekle (UI - Yeni Kullanıcı)
                else {
                    this.kullanicilar.push({
                        id: this.kullanicilar.length + 1,
                        isim: this.aktifKullanici.isim,
                        rol: this.aktifKullanici.rol
                    });
                }

                this.aktifKullanici = {};
                $('#kullaniciModal').modal('hide');
            }
            
        },
        kullaniciSil(index) {
            this.kullanicilar.splice(index, 1);
        },
        kullaniciSil2(id) {
            // 1. Kullanıcılar arrayin de id ile arama yapar.
            const kullanici = this.kullanicilar.find(x=>x.id == id);
            if (kullanici != null) {
                this.kullanicilar = this.kullanicilar.filter(x=>x.id != kullanici.id);
            }
        },
        kullaniciDuzenle(index) {
            this.aktifKullanici = this.kullanicilar[index];
            $('#kullaniciModal').modal('show');
        },
    }
});