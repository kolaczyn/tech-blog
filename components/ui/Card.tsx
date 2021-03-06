import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ShadedImage from './ShadedImage';

interface CardProps {
  title: string;
  subtitle: string;
  imgSrc: string;
  children: React.ReactNode;
  href: string;
}

const paddingClass = 'p-3';

export default function Card({
  title,
  subtitle,
  imgSrc,
  children,
  href,
}: CardProps) {
  return (
    <Link href={href}>
      <a>
        <section className='bg-body overflow-hidden shadow hover:shadow-xl transition duration-300 cursor-pointer rounded-md'>
          <ShadedImage src={imgSrc} gradientColor='from-body'>
            {/* don't add title if there is no title. That's because <Card> doesn't add black gradient to the image if there is no title */}
            {title && (
              <div className='p-3'>
                <h3>{title}</h3>
              </div>
            )}
          </ShadedImage>
          <section className={paddingClass}>
            <p className='dim text-base'>{subtitle}</p>
            <section>{children}</section>
          </section>
        </section>
      </a>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: '',
};
