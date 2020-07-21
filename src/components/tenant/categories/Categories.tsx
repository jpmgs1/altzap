import React, { FC, Fragment, useState } from 'react'
import { Button, List, Modal, Skeleton } from 'antd'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'

import { useTenantConfig } from '../../../contexts/TenantContext'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'

const Categories: FC = () => {
  const [addModal, setAddModal] = useState(false)
  const [selectedCategory, setCategory] = useState<Category>()

  const { categories, categoriesLoading } = useTenantConfig()

  return (
    <Fragment>
      <List
        size="small"
        bordered
        itemLayout="horizontal"
        dataSource={categories}
        renderItem={(category) => (
          <List.Item>
            <List.Item.Meta
              title={<span className="f5 fw4">{category.name}</span>}
              description={`${category.products.length} produtos`}
            />
            <div>
              <Button
                onClick={() => setCategory(category)}
                shape="circle"
                icon={<EditOutlined />}
              />
            </div>
          </List.Item>
        )}
      >
        {categoriesLoading && (
          <List.Item
            style={{
              maxWidth: '300px',
              width: '90%',
              margin: '5pxpx 0 10px 5px',
            }}
          >
            <Skeleton loading active />
          </List.Item>
        )}
        <div className="pt1 pb3 flex justify-center">
          <Button icon={<PlusOutlined />} onClick={() => setAddModal(true)}>
            Adicionar
          </Button>
        </div>
      </List>
      <Modal
        title="Editar Categoria"
        visible={!!selectedCategory}
        onCancel={() => setCategory(undefined)}
        footer={null}
      >
        {selectedCategory && (
          <EditCategory
            onFinish={() => setCategory(undefined)}
            category={selectedCategory}
          />
        )}
      </Modal>
      <Modal
        title="Adicionar Categoria"
        visible={addModal}
        onCancel={() => setAddModal(false)}
        footer={null}
      >
        <AddCategory onFinish={() => setAddModal(false)} />
      </Modal>
    </Fragment>
  )
}

export default Categories
