'use client'
import Star from '../../../public/svgs/star.svg'

interface Icharts {
  percentage: number
  color: string
  hollowColor: string
  content: string
  starCount: number
}

const Charts: React.FC<Icharts> = ({
  percentage,
  color,
  hollowColor,
  content,
  starCount,
}) => {
  const radius = 80
  const stroke = 20
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const starSize = 20 // 각 별의 크기를 20px로 설정

  return (
    <div>
      <div
        className="flex mt-[40px] mx-auto items-center px-[10px] py-[8px] box-content bg-Background-Beige3 text-center rounded-xl"
        style={{
          width: `${starCount * starSize}px`,
          height: `${starSize}px`,
        }}
      >
        {[...Array(starCount)].map((item) => (
          <Star key={item} width={starSize} height={starSize} />
        ))}
      </div>
      <div className="relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform rotate-90"
        >
          <circle
            stroke={hollowColor}
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 text-Dark-Brown translate-x-[-50%] translate-y-[-50%]">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Charts
