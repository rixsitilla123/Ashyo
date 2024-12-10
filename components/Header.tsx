import Link from 'next/link'
import React from 'react'
import { HeaderLocationIcon, HeaderSearchIcon, Headericon1, Headericon2, Headericon3, Headericon4, Logo } from './public/images/icons'

interface IHeaderInfoS {
	id: number,
	title: string,
	path: string
}

interface Icategories {
	id: number, 
	title: string
}

const Header = () => {
	const HeaderINfoS: IHeaderInfoS[] = [
		{
			id: 1,
			title: "About Us",
			path: "/"
		}, {
			id: 2,
			title: "Products",
			path: "/"
		}, {
			id: 3,
			title: "Contacts",
			path: "/"
		}
	]

	const HeaderCategories:Icategories[] = [
		{
			id: 1,
			title: "Aksiyalar" 
		}, {
			id: 2,
			title: "Smartfonlar" 
		}, {
			id: 3,
			title: "Noutbooklar" 
		}, {
			id: 4,
			title: "Kondetsionerlar" 
		}, {
			id: 5,
			title: "Telivizorlar" 
		}, {
			id: 6,
			title: "Muzlatgichlar" 
		}, {
			id: 7,
			title: "Kiryuvish mashinalari" 
		}, {
			id: 8,
			title: "Telivizorlar" 
		}, {
			id: 9,
			title: "Kiryuvish mashinalari" 
		}
	]

	return (
		<header className='pb-[30px]'>
			<section className="px-[128px] py-[13px] flex items-center justify-between bg-[#EBEFF3]">
				<div className="flex items-center gap-[30px]">
					<button className='flex items-center gap-[10px]'>
						<HeaderLocationIcon />
						<span className='text-[#545D6A] text-[14px] font-normal leading-[130%]'>Tashkent</span>
					</button>
					<div className="flex items-center space-x-[15px]">
						{HeaderINfoS.map(item => (<Link className='text-[#545D6A] text-[14px] font-normal leading-[130%]' href={item.path} key={item.id}>{item.title}</Link>))}
					</div>
				</div>
				<div className="flex items-center gap-[35px]">
					<Link className='text-[#545D6A] text-[14px] font-semibold leading-[130%]' href={"tel:998711234567"}>+998 (71) 123-45-67</Link>
					<select className='bg-transparent outline-none border-none'>
						<option value="0">Uz</option>
						<option value="1">Ru</option>
						<option value="2">En</option>
					</select>
				</div>
			</section>
			<div className="px-[128px] py-[25px] flex items-center justify-between">
				<div className="flex items-center gap-[35px]">
					<Link className='flex items-center text-[#134E9B] text-[36px] font-black leading-[42px]' href={"/"}>
						<span><Logo/></span>
						Ashyo
					</Link>
					<div className="flex items-center gap-[10px]">
						<select className='bg-[#134E9B] py-[14px] px-[25px] rounded-[6px] text-white text-[16px] font-medium leading-[18px]'>
							<option value="0">Kategorya</option>
							<option value="1">Aksiyalar</option>
							<option value="2">Smartfonlar va Aksasuerlar</option>
						</select>
						<label className='rounded-[6px] bg-[#EBEFF3] pl-[26px] flex items-center'>
							<input className='w-[262px] text-[rgba(0, 0, 0, 20%)] text-[13px] font-normal leading-[15px] bg-transparent outline-none' type="text" placeholder='What are you looking for?' autoComplete='off'/>
							<button className='bg-[#134E9B] rounded-[6px] py-[14px] px-[20px]'><HeaderSearchIcon/></button>
						</label>
					</div>
				</div>
				<div className="flex items-center space-x-[15px]">
					<div className="py-[12px] px-[13px] rounded-[6px] bg-[#EBEFF3] cursor-pointer"><Headericon1/></div>
					<div className="py-[12px] px-[13px] rounded-[6px] bg-[#EBEFF3] cursor-pointer"><Headericon2/></div>
					<div className="py-[12px] px-[13px] rounded-[6px] bg-[#EBEFF3] cursor-pointer"><Headericon3/></div>
					<div className="py-[12px] px-[13px] rounded-[6px] bg-[#EBEFF3] cursor-pointer"><Headericon4/></div>
				</div>
			</div>
			<section className="flex items-center justify-between px-[128px]">
				{HeaderCategories.map(item => <span className='text-[#545D6A] text-[16px] font-normal cursor-pointer leding-[21px]' key={item.id}>{item.title}</span>)}
			</section>
		</header>
	)
}

export default Header
