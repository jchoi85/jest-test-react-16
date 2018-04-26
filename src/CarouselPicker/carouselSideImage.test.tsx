import * as React from 'react';

import * as Adapter from "enzyme-adapter-react-16"
import * as enzyme from 'enzyme';

import { CarouselSideImage, IPublicCarouselSlide } from './';

enzyme.configure({adapter: new Adapter()})

const image: IPublicCarouselSlide = {
  url: "test",
  leftText: "test",
  rightText: "test"
}

const onSideAdd = jest.fn();
const onSideRemove = jest.fn();
const onDeleteImage = jest.fn();

const props = {
  image: image,
	onSideAdd: onSideAdd,
	onSideRemove: onSideRemove,
	included: true,
  onDeleteImage: onDeleteImage,
}

it('renders img', () => {
  const carouselSideImage = enzyme.shallow(<CarouselSideImage {...props} />);
  expect(carouselSideImage.find("img").length).toEqual(1)
});

it('shows selected overlay if image is included', ()=>{
  const carouselSideImage = enzyme.shallow(<CarouselSideImage {...props} />);
  expect(carouselSideImage.find(".overlay").prop("hidden")).toEqual(false);
})

it('shows selected overlay if image is not included', ()=>{
  const carouselSideImage = enzyme.shallow(<CarouselSideImage {...props} included={false} />);
  expect(carouselSideImage.find(".overlay").prop("hidden")).toEqual(true);
})

it('runs onSideAdd', () => {
  const carouselSideImage = enzyme.shallow(<CarouselSideImage {...props} />);
  carouselSideImage.find("img").simulate("click");
  expect(onSideAdd.mock.calls.length).toBe(1);
});

it('runs onSideRemove', () => {
  const carouselSideImage = enzyme.shallow(<CarouselSideImage {...props} />);
  carouselSideImage.find(".overlay").simulate("click");
  expect(onSideRemove.mock.calls.length).toBe(1);
});

it('runs onDeleteImage', () => {
  const carouselSideImage = enzyme.shallow(<CarouselSideImage {...props} />);
  carouselSideImage.find("i").simulate("click");
  expect(onDeleteImage.mock.calls.length).toBe(1);
});