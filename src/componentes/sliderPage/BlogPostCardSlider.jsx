import React, { useCallback, useEffect, useRef, useState } from "react";
import useIdle from "../customHooks/useIdle";
import SlideLink from "./SlideLink";
import Wrapper from "./Wrapper";
import Slide from "./Slide";

const BlogPostCardSlider = ({ children, visibleSlide, setVisibleSlide }) => {
	const [targetSlide, setTargetSlide] = useState(0);
	const wrapperRef = useRef(null);
	const targetSlideRef = useRef(null);

	const scrollToTargetSlide = useCallback(() => {
		const targetSlide = targetSlideRef.current;
		const wrapper = wrapperRef.current;
		if (wrapper && targetSlide) {
			wrapper.scrollTo({
				left: 0,
				top: targetSlide.offsetTop,
				behavior: "smooth",
			});
		}
	}, []);

	const finishScrolling = useCallback(() => {
		setTargetSlide(visibleSlide);
		scrollToTargetSlide();
	}, [visibleSlide, scrollToTargetSlide]);
	const touchScroll = useIdle({ timeout: 40, onIdle: finishScrolling });

	const handleScroll = useCallback(() => {
		let { height } = wrapperRef.current.getBoundingClientRect();
		let { scrollTop } = wrapperRef.current;
		setVisibleSlide(Math.round(scrollTop / height));
		touchScroll();
	}, [touchScroll]);
	useEffect(scrollToTargetSlide, [targetSlide]);
	useEffect(() => {
		setTargetSlide(visibleSlide);
	}, []);
	return (
		<div id="trap" className="blogPostCard-container" tabIndex="0">
			<div className="blogPostCard-sliderLinks-container">
				{children.map((_, i) => {
					return (
						<SlideLink
							key={`slideLink-${i}`}
							isActive={visibleSlide === i}
							onClick={() => setTargetSlide(i)}
						>
							{i + 1}
						</SlideLink>
					);
				})}
			</div>
			<Wrapper onScroll={handleScroll} ref={wrapperRef}>
				{children.map((child, i) => (
					<Slide
						key={`slide-${i}`}
						ref={i === targetSlide ? targetSlideRef : null}
					>
						{child}
					</Slide>
				))}
			</Wrapper>
		</div>
	);
};

export default BlogPostCardSlider;
