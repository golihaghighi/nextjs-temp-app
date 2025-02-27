import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // children: React.ReactNode;
  rightIcon: React.ReactNode;
  leftIcon: React.ReactNode;
}

export function Button({ id,title,rightIcon,leftIcon, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-white px-7 py-3 text-black",
        className
      )}
    >
        {leftIcon}

        <span className="relative inline-flex overflow-hidden font-general text-xl uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
      {/* {children} */}
    </button>
  );
}
