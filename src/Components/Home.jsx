const Home = () => {
    return (
        <div>
            {newsData.map((news, index) => (
                <div key={news.id || index} className="...">
                    <img 
                        src={news.image || "https://placehold.co/600x400"} 
                        alt={news.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x400";
                        }}
                    />
                    {/* Rest of your news item content */}
                </div>
            ))}
        </div>
    );
};

export default Home; 