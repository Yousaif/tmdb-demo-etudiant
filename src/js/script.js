document.addEventListener("DOMContentLoaded", function ()
{
    let connexion = new MovieDb();
    connexion.requeteDerniersFilms();
});

class MovieDb
{
    constructor()
    {
        console.log('new movieDb()');
        this.apiKey = "d3c9aa5ce4c37cfabf60d3ddeb6c7126";
        this.lang = "fr-CA";
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/";
        this.totalFilm = 8;



    }

    requeteDerniersFilms()
    {
       let requete = new XMLHttpRequest();
       requete.addEventListener("loadend", this.retourRequeteDerniersfilms.bind(this));
       requete.open('Get', this.baseUrl + 'movie/now_playing?api_key=' + this.apiKey + '&language=' + this.lang + '&page=1');
       requete.send();

    }
    retourRequeteDerniersfilms(e)
    {
        console.log('ça marche');
        let target = e.currentTarget;
        let data = JSON.parse(target.responseText).results;
        console.log(data);
        this.afficheDerniersFilms(data);




    }

    afficheDerniersFilms(data)
    {
        for (let i = 0; i < data.length; i++)
        {
            console.log(data[i].title);
            console.log(data[i].overview);

        }

    }


}