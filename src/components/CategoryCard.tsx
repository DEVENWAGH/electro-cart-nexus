
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
  slug: string;
}

const CategoryCard = ({ title, image, count, slug }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-gray-200 text-sm">{count} products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
