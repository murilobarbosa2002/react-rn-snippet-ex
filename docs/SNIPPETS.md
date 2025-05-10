# Snippet Examples

## React Native Route (`rnr`)

```tsx
import ScreenNameScreen from '';

export default function ScreenNameRoute() {
    return <ScreenNameScreen />;
}
```

## React Native Component Export (`rnc`)

```tsx
import { View, Text } from 'react-native';

const NameComponentComponent = () => {
  return (
    <View>
      <Text>NameComponentComponent</Text>
    </View>
  );
};

export default NameComponentComponent;
```

## React Native Component Export with Types (`rncwt`)

```tsx
import React from 'react';
import { View, Text } from 'react-native';

interface NameComponentProps {
  name: string;
}

const NameComponentComponent: React.FC<NameComponentProps> = ({ props }) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default NameComponentComponent;
```

## React Native Section Export (`rns`)

```tsx
import { View, Text } from 'react-native';

const SectionNameSection = () => {
  return (
    <View>
      <Text>SectionNameSection</Text>
    </View>
  );
};

export default SectionNameSection;
```

## React Native Section Export with Types (`rnswt`)

```tsx
import React from 'react';
import { View, Text } from 'react-native';

interface SectionNameSectionProps {
  title: string;
}

const SectionNameSection: React.FC<SectionNameSectionProps> = ({ props }) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default SectionNameSection;
```

## React Native Screen Export (`rnsn`)

```tsx
import { View, Text } from 'react-native';

const ScreenNameScreen = () => {
  return (
    <View>
      <Text>ScreenNameScreen</Text>
    </View>
  );
};

export default ScreenNameScreen;
```

## React Native Screen Export with Types (`rnsnwt`)

```tsx
import React from 'react';
import { View, Text } from 'react-native';

interface ScreenNameScreenProps {
  title: string;
}

const ScreenNameScreen: React.FC<ScreenNameScreenProps> = ({ props }) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default ScreenNameScreen;
```