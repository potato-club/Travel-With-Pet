import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

type Props = {
  contents: string;
};

const test =
  '![imageURL](https://meongmeong-tui-img-storage.s3-ap-northeast-2.amazonaws.com/dc1ac576-b3b8-48d5-93f1-4855abad74f8.png)';

export function PostViewer({ contents }: Props) {
  return <Viewer initialValue={contents} />;
}
