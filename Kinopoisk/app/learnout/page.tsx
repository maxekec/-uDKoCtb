export const metadata = {
    title: 'Кинопоиск',
    description: 'Page description',
};

export default function SignUp() {
    const movies = [
        {
            title: "Человек-паук: Возвращение домой",
            description: "Питер Паркер пытается балансировать между школьной жизнью и борьбой с преступностью в качестве супергероя Человека-паука.",
            year: "2017",
            rating: "7.4/10 IMDb",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
            link: "https://www.kinopoisk.ru/film/690593/"
        },
        {
            title: "Мстители: Финал",
            description: "Оставшиеся в живых члены Мстителей пытаются отменить разрушения, причиненные Таносом в предыдущей части.",
            year: "2019",
            rating: "8.4/10 IMDb",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
            link: "https://www.kinopoisk.ru/film/843650/"
        },
        {
            title: "Интерстеллар",
            description: "Группа исследователей путешествует сквозь червоточину в космосе в поисках нового дома для человечества.",
            year: "2014",
            rating: "8.6/10 IMDb",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
            link: "https://www.kinopoisk.ru/film/258687/"
        },
        {
            title: "Начало",
            description: "Дом Кобб, вор, специализирующийся на краже секретов с помощью проникновения в сны, получает шанс искупить свои грехи.",
            year: "2010",
            rating: "8.8/10 IMDb",
            imageUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/76/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%81%D0%B0%D1%83%D0%BD%D0%B4%D1%82%D1%80%D0%B5%D0%BA%D0%B0_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE.jpg/274px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D1%81%D0%B0%D1%83%D0%BD%D0%B4%D1%82%D1%80%D0%B5%D0%BA%D0%B0_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE.jpg",
            link: "https://www.kinopoisk.ru/film/447301/"
        },
        {
            title: "Джокер",
            description: "История становления Артура Флека, обыкновенного человека, ставшего Джокером — символом безумия и анархии в Готэме.",
            year: "2019",
            rating: "8.4/10 IMDb",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
            link: "https://www.kinopoisk.ru/film/1048334/"
        },
        {
            title: "Матрица",
            description: "Программист Нео обнаруживает, что его мир — это искусственная реальность, созданная машинами для порабощения человечества.",
            year: "1999",
            rating: "8.7/10 IMDb",
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
            link: "https://www.kinopoisk.ru/film/301/"
        }
    ];

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Карточки фильмов</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {movies.map((movie, index) => (
                            <a
                                key={index}
                                href={movie.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                            >
                                <img
                                    className="w-full h-48 object-cover"
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-white mb-2">
                                        {movie.title}
                                    </h2>
                                    <p className="text-gray-400 mb-4">
                                        {movie.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">{movie.year}</span>
                                        <span className="text-gray-400">{movie.rating}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
