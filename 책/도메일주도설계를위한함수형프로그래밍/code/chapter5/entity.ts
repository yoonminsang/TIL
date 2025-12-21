type RawId = string | number | bigint;

export abstract class Entity<T extends RawId | ValueObject> implements Equatable {
  abstract readonly id: ID;
  protected abstract isSameClass<T extends Entity<ID>>(obj: unknown): obj is T;

  @bound
  equals(obj: unknown): boolean {
    if (!this.isSameClass(obj)) return false;
    const otherId = (obj as Entity<ID>).id;
    return this.id instanceof ValueObject ? this.id.equals(otherId) : this.id === otherId;
  }
}

class Contact extends Entity<ContactId> {
  contactId: ContactId; // WrapperId
  phoneNumber: PhoneNumber;
  emailAddress: EmailAddress;

  get id(): ContactId {
    return this.contactId;
  }

  isSameClass<Contact>(obj: unknown): obj is Contact {
    return obj instanceof Contact;
  }
}

// id만으로 같은 엔티티인지 구분
const contactId = new ContactId(1);
const contact1 = new Contact(contactId, new PhoneNumber('123-456-7890'), new EmailAddress('bob@example.com'));
const contact2 = new Contact(contactId, new PhoneNumber('123-456-7890'), new EmailAddress('robert@example.com'));
console.log(contact1.equals(contact2));

///////////////////////////////////////////////////////

const initialPerson = new Person(new PersonId(42), 'Joseph');

import { produce } from 'immer';

const updatePerson = produce(initialPerson, (draft) => {
  draft.lastName = 'Joe';
});

// 출력이 없으므로 아무것도 변경하지 않았거나, Person을 부수효과로 변경
// type UpdateName = (person: Person) => (name: string) => void;

// Person이 불변이라면 다음과 같이 변경한 Person 타입 출력
type UpdateName = (person: Person) => (name: string) => Person;

// 대충 이런식일듯
const updateName: UpdateName = (person) => (name) =>
  produce(person, (draft) => {
    draft.name = name;
  });
