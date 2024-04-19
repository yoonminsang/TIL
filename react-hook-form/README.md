react-hook-form에서 mode: 'onChange' 설정은 사용자가 입력할 때마다 폼의 유효성 검사(validation)를 실행하라는 지시입니다. 이 모드가 설정되면, 각 입력 필드의 변경 사항이 발생할 때마다 즉시 유효성 검사가 수행되어 폼의 isValid 상태가 업데이트됩니다. 따라서, 사용자가 입력하거나 선택하는 즉시 각 필드의 유효성이 검사되며, 이는 사용자 경험을 개선하고 폼을 제출하기 전에 오류를 사전에 발견할 수 있게 합니다.

그럼에도 setValue를 사용하여 프로그래매틱하게 폼 필드의 값을 변경하는 경우, setValue 함수 호출 후 명시적으로 trigger 함수를 호출해야 하는 이유는 무엇일까요?

react-hook-form의 mode: 'onChange' 설정이 입력 필드의 직접적인 사용자 인터랙션에 의한 변경사항에 대해서는 유효성 검사를 자동으로 실행하지만, setValue 함수를 통해 프로그램 코드로 값이 변경되는 경우에는 자동으로 유효성 검사를 트리거하지 않기 때문입니다. 이는 setValue 함수 호출이 폼 필드의 값이 사용자에 의해 직접 변경되었다는 것을 react-hook-form이 자동으로 감지할 수 없기 때문입니다.

결론적으로, mode: 'onChange' 설정은 사용자의 입력에 의한 변경사항에 대해 자동으로 유효성 검사를 수행하지만, setValue 같은 API를 통해 프로그램적으로 폼 필드의 값을 변경하는 경우에는 이 변경사항이 유효성 검사를 자동으로 트리거하지 않습니다. 따라서, setValue를 사용한 후 폼의 유효성 상태를 업데이트하고 싶다면 trigger 함수를 명시적으로 호출해야 합니다.