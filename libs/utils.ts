//tailwind와 삼항연산자를 함께 사용할 경우 가독성을 올려줄 메서드
export function cls(...classnames: string[]) {
  return classnames.join();
}
